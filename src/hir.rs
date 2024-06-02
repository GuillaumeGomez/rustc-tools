use rustc_data_structures::sync::Lrc;
use rustc_data_structures::unord::UnordSet;
use rustc_errors::emitter::{stderr_destination, DynEmitter, HumanEmitter};
use rustc_errors::json::JsonEmitter;
use rustc_errors::{DiagCtxt, ErrorGuaranteed, FatalError, TerminalUrl};
use rustc_feature::UnstableFeatures;
use rustc_hir::def_id::LocalDefId;
use rustc_interface::interface;
use rustc_middle::ty::TyCtxt;
use rustc_session::config::{
    self, parse_crate_types_from_list, parse_externs, rustc_optgroups, CodegenOptions,
    ErrorOutputType, Input, Options, UnstableOptions,
};
use rustc_session::search_paths::SearchPath;
use rustc_session::{getopts, EarlyDiagCtxt};
use rustc_span::source_map::{FilePathMapping, SourceMap};
use rustc_span::FileName;

use std::io::{self, Read};
use std::marker;
use std::path::PathBuf;
use std::sync::{Arc, LazyLock};

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
/// Take a look at [`cargo_integration`](crate::cargo_integration) and at
/// [rustc-tools-example](https://github.com/GuillaumeGomez/rustc-tools-example) to see how to
/// write a cargo integration.
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
pub fn with_tyctxt<F: FnOnce(TyCtxt<'_>) + marker::Send>(
    rustc_args: &[String],
    callback: F,
) -> Result<(), String> {
    let mut dcx = EarlyDiagCtxt::new(ErrorOutputType::default());
    // Most of this code comes from rustdoc.
    rustc_driver::init_rustc_env_logger(&dcx);
    let args = rustc_driver::args::arg_expand_all(&dcx, rustc_args)
        .map_err(|err| format!("Failed to expand arguments: {err:?}"))?;

    let mut options = getopts::Options::new();
    for option in rustc_optgroups() {
        (option.apply)(&mut options);
    }
    let matches = match options.parse(&args[..]) {
        Ok(m) => m,
        Err(err) => {
            dcx.early_fatal(err.to_string());
        }
    };

    // Note that we discard any distinction between different non-zero exit
    // codes from `from_matches` here.
    let config = match create_config(&mut dcx, &matches, args) {
        Some(opts) => opts,
        None => return Err("Failed to create_config".to_owned()),
    };

    interface::run_compiler(config, |compiler| {
        let sess = &compiler.sess;

        if sess.opts.describe_lints {
            rustc_driver::describe_lints(sess);
            return Ok(());
        }

        compiler.enter(|queries| {
            let Ok(mut global_ctxt) = queries.global_ctxt() else {
                FatalError.raise()
            };
            if sess.dcx().has_errors().is_some() {
                sess.dcx().fatal("Compilation failed, aborting rustdoc");
            }

            global_ctxt.enter(|tcx| {
                let _ = tcx.sess.time("wf_checking", || {
                    tcx.hir()
                        .try_par_for_each_module(|module| tcx.ensure().check_mod_type_wf(module))
                });

                if let Some(guar) = tcx.dcx().has_errors() {
                    return Err(guar);
                }

                tcx.sess.time("check_mod_attrs", || {
                    tcx.hir()
                        .for_each_module(|module| tcx.ensure().check_mod_attrs(module))
                });
                rustc_passes::stability::check_unused_or_stable_features(tcx);

                if let Some(guar) = tcx.dcx().has_errors() {
                    return Err(guar);
                }

                callback(tcx);
                Ok(())
            })
        })
    })
    .map_err(|err| format!("interface:;run_compiler failed: {err:?}"))
}

fn make_input(
    early_dcx: &EarlyDiagCtxt,
    dcx: &DiagCtxt,
    free_matches: &[String],
) -> Result<Input, ErrorGuaranteed> {
    match free_matches {
        [] => dcx.fatal("missing file operand"),
        [input] if input == "-" => {
            let mut src = String::new();
            if io::stdin().read_to_string(&mut src).is_err() {
                // Immediately stop compilation if there was an issue reading
                // the input (for example if the input stream is not UTF-8).
                early_dcx
                    .early_fatal("couldn't read from stdin, as it did not contain valid UTF-8");
            }
            Ok(Input::Str {
                name: FileName::anon_source_code(&src),
                input: src,
            })
        }
        [input] => Ok(Input::File(PathBuf::from(input))),
        _ => dcx.fatal("too many file operands"),
    }
}

#[allow(clippy::arc_with_non_send_sync)]
fn new_dcx(
    error_format: ErrorOutputType,
    source_map: Option<Lrc<SourceMap>>,
    diagnostic_width: Option<usize>,
    unstable_opts: &UnstableOptions,
) -> DiagCtxt {
    let fallback_bundle = rustc_errors::fallback_fluent_bundle(
        rustc_driver::DEFAULT_LOCALE_RESOURCES.to_vec(),
        false,
    );
    let emitter: Box<DynEmitter> = match error_format {
        ErrorOutputType::HumanReadable(kind) => {
            let (short, color_config) = kind.unzip();
            Box::new(
                HumanEmitter::new(stderr_destination(color_config), fallback_bundle)
                    .sm(source_map.map(|sm| sm as _))
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
                JsonEmitter::new(
                    Box::new(io::BufWriter::new(io::stderr())),
                    source_map,
                    fallback_bundle,
                    pretty,
                    json_rendered,
                )
                .ui_testing(unstable_opts.ui_testing)
                .diagnostic_width(diagnostic_width)
                .track_diagnostics(unstable_opts.track_diagnostics)
                .terminal_url(TerminalUrl::No),
            )
        }
    };

    rustc_errors::DiagCtxt::new(emitter).with_flags(unstable_opts.dcx_flags(true))
}

fn create_config(
    early_dcx: &mut EarlyDiagCtxt,
    matches: &getopts::Matches,
    args: Vec<String>,
) -> Option<interface::Config> {
    let color = config::parse_color(early_dcx, matches);
    let config::JsonConfig { json_rendered, .. } = config::parse_json(early_dcx, matches);
    let error_format = config::parse_error_format(early_dcx, matches, color, json_rendered);
    let diagnostic_width = matches.opt_get("diagnostic-width").unwrap_or_default();

    let codegen_options = CodegenOptions::build(early_dcx, matches);
    let unstable_opts = UnstableOptions::build(early_dcx, matches);

    let dcx = new_dcx(error_format, None, diagnostic_width, &unstable_opts);

    let (lint_opts, describe_lints, lint_cap) = config::get_cmd_lint_options(early_dcx, matches);

    let input = match make_input(early_dcx, &dcx, &matches.free) {
        Ok(i) => i,
        Err(e) => {
            dcx.struct_err(format!("Failed to parse input: {:?}", e))
                .emit();
            return None;
        }
    };

    let target = rustc_session::config::parse_target_triple(early_dcx, matches);

    let libs = matches
        .opt_strs("L")
        .iter()
        .map(|s| {
            SearchPath::from_cli_opt(
                &rustc_session::filesearch::get_or_default_sysroot()
                    .expect("Failed finding sysroot"),
                &target,
                early_dcx,
                s,
                #[allow(rustc::bad_opt_access)] // we have no `Session` here
                unstable_opts.unstable_options,
            )
        })
        .collect();
    let externs = parse_externs(early_dcx, matches, &unstable_opts);

    let cfgs = matches.opt_strs("cfg");
    let check_cfgs = matches.opt_strs("check-cfg");

    let crate_types = match parse_crate_types_from_list(matches.opt_strs("crate-type")) {
        Ok(types) => types,
        Err(e) => {
            dcx.struct_err(format!("unknown crate type: {}", e)).emit();
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
        target_triple: target,
        unstable_features: UnstableFeatures::from_environment(crate_name.as_deref()),
        actually_rustdoc: false,
        unstable_opts,
        error_format,
        diagnostic_width,
        edition: config::parse_crate_edition(early_dcx, matches),
        describe_lints,
        crate_name,
        test: false,
        ..Options::default()
    };

    Some(interface::Config {
        opts: sessopts,
        crate_cfg: cfgs,
        crate_check_cfg: check_cfgs,
        input,
        output_file: None,
        output_dir: None,
        file_loader: None,
        lint_caps: Default::default(),
        psess_created: None,
        hash_untracked_state: None,
        register_lints: None,
        override_queries: Some(|_sess, providers| {
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
        using_internal_features: Arc::default(),
        expanded_args: args,
    })
}
