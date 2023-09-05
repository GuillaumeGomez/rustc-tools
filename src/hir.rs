use rustc_data_structures::sync::{Lrc, Send};
use rustc_data_structures::unord::UnordSet;
use rustc_driver::abort_on_err;
use rustc_errors::emitter::{Emitter, EmitterWriter};
use rustc_errors::json::JsonEmitter;
use rustc_errors::ErrorGuaranteed;
use rustc_feature::UnstableFeatures;
use rustc_hir::def_id::LocalDefId;
use rustc_interface::interface;
use rustc_middle::ty::TyCtxt;
use rustc_session::config::{
    parse_crate_types_from_list, parse_externs, rustc_optgroups, CodegenOptions, ErrorOutputType,
    Input, Options, UnstableOptions,
};
use rustc_session::search_paths::SearchPath;
use rustc_session::{config, getopts, EarlyErrorHandler};
use rustc_span::source_map::{FilePathMapping, SourceMap};
use rustc_span::FileName;

use std::io::{self, Read};
use std::marker;
use std::path::PathBuf;
use std::sync::LazyLock;

/// If you need more information than what is provided by
/// [`with_ast_parser`](crate::with_ast_parser), this is the function you will use.
///
/// * `rustc_args` argument is what will be provided to rustc.
/// * `callback` argument is the callback that will be called once everything has been set up. It
///   provides a [`TyCtxt`] instance which will allow to use the rustc query engine.
///
/// **VERY IMPORTANT TO NOTE**: if you want to run this code on a crate with dependencies, you'll
/// need to pass the according options so that `rustc` knows where to look for them. otherwise it
/// will simply fail to compile and the `callback` won't be called. A good example of the list
/// of the expected arguments can be seen when you run `cargo build -v`.
///
/// Don't forget to take a look at the [`TyCtxt`] and at the
/// [`Map`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/hir/map/struct.Map.html)
/// documentations.
///
/// And to make things much simpler, I strongly recommend to use
/// the [HIR visitor](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_hir/intravisit/trait.Visitor.html).
/// (You can take a look at how to use it with `examples/hir.rs`.)
///
/// [`TyCtxt`]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.TyCtxt.html
pub fn with_tyctxt<T: marker::Send, F: FnOnce(TyCtxt<'_>) -> T + marker::Send>(
    rustc_args: &[String],
    callback: F,
) -> Result<T, String> {
    let mut handler = EarlyErrorHandler::new(ErrorOutputType::default());
    // Most of this code comes from rustdoc.
    rustc_driver::init_rustc_env_logger(&handler);
    let args = rustc_driver::args::arg_expand_all(&handler, rustc_args);

    let mut options = getopts::Options::new();
    for option in rustc_optgroups() {
        (option.apply)(&mut options);
    }
    let matches = match options.parse(&args[..]) {
        Ok(m) => m,
        Err(err) => {
            handler.early_error(err.to_string());
        }
    };

    // Note that we discard any distinction between different non-zero exit
    // codes from `from_matches` here.
    let config = match create_config(&mut handler, &matches) {
        Some(opts) => opts,
        None => return Err("Failed to create_config".to_owned()),
    };

    interface::run_compiler(config, |compiler| {
        let sess = compiler.session();

        if sess.opts.describe_lints {
            sess.diagnostic()
                .err("`describe-lints` option is not allowed");
            return Err("`describe-lints` option is not allowed".to_owned());
        }

        compiler.enter(|queries| {
            if sess.diagnostic().has_errors_or_lint_errors().is_some() {
                sess.fatal("Compilation failed, aborting");
            }

            let mut global_ctxt = abort_on_err(queries.global_ctxt(), sess);

            global_ctxt.enter(|tcx| {
                tcx.sess.time("type_collecting", || {
                    tcx.hir()
                        .for_each_module(|module| tcx.ensure().collect_mod_item_types(module))
                });
                tcx.sess.time("item_types_checking", || {
                    tcx.hir()
                        .for_each_module(|module| tcx.ensure().check_mod_item_types(module))
                });
                tcx.sess.abort_if_errors();
                tcx.sess.time("check_mod_attrs", || {
                    tcx.hir()
                        .for_each_module(|module| tcx.ensure().check_mod_attrs(module))
                });
                rustc_passes::stability::check_unused_or_stable_features(tcx);
                if tcx.sess.diagnostic().has_errors_or_lint_errors().is_some() {
                    rustc_errors::FatalError.raise();
                }

                Ok(callback(tcx))
            })
        })
    })
}

fn make_input(
    handler: &EarlyErrorHandler,
    free_matches: &[String],
    diag: &rustc_errors::Handler,
) -> Result<Option<Input>, ErrorGuaranteed> {
    if free_matches.len() == 1 {
        let ifile = &free_matches[0];
        if ifile == "-" {
            let mut src = String::new();
            if io::stdin().read_to_string(&mut src).is_err() {
                // Immediately stop compilation if there was an issue reading
                // the input (for example if the input stream is not UTF-8).
                let reported = handler.early_error_no_abort(
                    "couldn't read from stdin, as it did not contain valid UTF-8",
                );
                return Err(reported);
            }
            Ok(Some(Input::Str {
                name: FileName::anon_source_code(&src),
                input: src,
            }))
        } else {
            Ok(Some(Input::File(PathBuf::from(ifile))))
        }
    } else if free_matches.is_empty() {
        diag.struct_err("missing file operand").emit();
        Ok(None)
    } else {
        diag.struct_err("too many file operands").emit();
        Ok(None)
    }
}

fn new_handler(
    error_format: ErrorOutputType,
    source_map: Option<Lrc<SourceMap>>,
    diagnostic_width: Option<usize>,
    unstable_opts: &UnstableOptions,
) -> rustc_errors::Handler {
    let fallback_bundle = rustc_errors::fallback_fluent_bundle(
        rustc_driver::DEFAULT_LOCALE_RESOURCES.to_vec(),
        false,
    );
    let emitter: Box<dyn Emitter + Send> = match error_format {
        ErrorOutputType::HumanReadable(kind) => {
            let (short, color_config) = kind.unzip();
            Box::new(
                EmitterWriter::stderr(color_config, fallback_bundle)
                    .sm(source_map.clone())
                    .short_message(short)
                    .teach(unstable_opts.teach)
                    .diagnostic_width(diagnostic_width)
                    .track_diagnostics(unstable_opts.track_diagnostics)
                    .ui_testing(unstable_opts.ui_testing),
            )
        }
        ErrorOutputType::Json {
            pretty,
            json_rendered,
        } => {
            let source_map =
                source_map.unwrap_or_else(|| Lrc::new(SourceMap::new(FilePathMapping::empty())));
            Box::new(
                JsonEmitter::stderr(
                    None,
                    source_map,
                    None,
                    fallback_bundle,
                    pretty,
                    json_rendered,
                    diagnostic_width,
                    false,
                    unstable_opts.track_diagnostics,
                    rustc_errors::TerminalUrl::No,
                )
                .ui_testing(unstable_opts.ui_testing),
            )
        }
    };

    rustc_errors::Handler::with_emitter(emitter)
        .with_flags(unstable_opts.diagnostic_handler_flags(true))
}

fn create_config(
    handler: &mut EarlyErrorHandler,
    matches: &getopts::Matches,
) -> Option<interface::Config> {
    let color = config::parse_color(handler, matches);
    let config::JsonConfig { json_rendered, .. } = config::parse_json(handler, matches);
    let error_format = config::parse_error_format(handler, matches, color, json_rendered);
    let diagnostic_width = matches.opt_get("diagnostic-width").unwrap_or_default();

    let codegen_options = CodegenOptions::build(handler, matches);
    let unstable_opts = UnstableOptions::build(handler, matches);

    let diag = new_handler(error_format, None, diagnostic_width, &unstable_opts);

    let (lint_opts, describe_lints, lint_cap) = config::get_cmd_lint_options(handler, matches);

    let input = match make_input(handler, &matches.free, &diag) {
        Ok(Some(i)) => i,
        Ok(None) => {
            return None;
        }
        Err(e) => {
            diag.struct_err(format!("Failed to parse input: {:?}", e))
                .emit();
            return None;
        }
    };

    let libs = matches
        .opt_strs("L")
        .iter()
        .map(|s| SearchPath::from_cli_opt(handler, s))
        .collect();
    let externs = parse_externs(handler, matches, &unstable_opts);

    let cfgs = matches.opt_strs("cfg");
    let check_cfgs = matches.opt_strs("check-cfg");

    let crate_types = match parse_crate_types_from_list(matches.opt_strs("crate-type")) {
        Ok(types) => types,
        Err(e) => {
            diag.struct_err(format!("unknown crate type: {}", e)).emit();
            return None;
        }
    };
    let crate_name = matches.opt_str("crate-name");

    let sessopts = config::Options {
        maybe_sysroot: matches.opt_str("sysroot").map(PathBuf::from),
        search_paths: libs,
        crate_types,
        lint_opts,
        lint_cap,
        cg: codegen_options,
        externs,
        target_triple: config::parse_target_triple(handler, matches),
        unstable_features: UnstableFeatures::from_environment(crate_name.as_deref()),
        actually_rustdoc: false,
        unstable_opts,
        error_format,
        diagnostic_width,
        edition: config::parse_crate_edition(handler, matches),
        describe_lints,
        crate_name,
        test: false,
        ..Options::default()
    };

    Some(interface::Config {
        opts: sessopts,
        crate_cfg: interface::parse_cfgspecs(handler, cfgs),
        crate_check_cfg: interface::parse_check_cfg(handler, check_cfgs),
        input,
        output_file: None,
        output_dir: None,
        file_loader: None,
        lint_caps: Default::default(),
        parse_sess_created: None,
        register_lints: None,
        override_queries: Some(|_sess, providers, _external_providers| {
            // Most lints will require typechecking, so just don't run them.
            providers.lint_mod = |_, _| {};
            // hack so that `used_trait_imports` won't try to call typeck
            providers.used_trait_imports = |_, _| {
                static EMPTY_SET: LazyLock<UnordSet<LocalDefId>> = LazyLock::new(UnordSet::default);
                &EMPTY_SET
            };
        }),
        make_codegen_backend: None,
        registry: rustc_driver::diagnostics_registry(),
        locale_resources: rustc_driver::DEFAULT_LOCALE_RESOURCES,
        ice_file: None,
    })
}
