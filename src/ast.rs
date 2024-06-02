use std::panic::{catch_unwind, AssertUnwindSafe};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};

use rustc_ast::ast::Crate;
use rustc_data_structures::sync::Lrc;
use rustc_errors::emitter::{stderr_destination, DynEmitter, Emitter, HumanEmitter, SilentEmitter};
use rustc_errors::translation::Translate;
use rustc_errors::{ColorConfig, DiagCtxt, DiagInner, Level as DiagnosticLevel};
use rustc_parse::new_parser_from_file;
use rustc_parse::parser::Parser;
use rustc_session::parse::ParseSess;
use rustc_span::edition::Edition;
use rustc_span::source_map::{FilePathMapping, SourceMap};

/// You can check `ParseSess` documentation [here](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_session/parse/struct.ParseSess.html)
/// and `Crate` documentation [here](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_ast/ast/struct.Crate.html).
///
/// And to make things much simpler, I strongly recommend to use
/// the [AST visitor](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_ast/visit/trait.Visitor.html).
/// (You can take a look at how to use it with `examples/ast.rs`.)
pub fn with_ast_parser<T, F: Fn(&ParseSess, &Crate) -> T>(
    path: &Path,
    edition: Edition,
    callback: F,
) -> Result<T, String> {
    let path = PathBuf::from(&path);

    rustc_span::create_session_if_not_set_then(edition, move |_| {
        let parser_session = create_parser_session();
        let mut parser = create_parser(&path, &parser_session)?;
        let krate = parse_crate(&mut parser)?;

        Ok(callback(&parser_session, &krate))
    })
}

/// Emit errors against every files.
struct SilentOnIgnoredFilesEmitter {
    emitter: Box<DynEmitter>,
    has_non_ignorable_parser_errors: bool,
    can_reset: Lrc<AtomicBool>,
}

impl SilentOnIgnoredFilesEmitter {
    fn handle_non_ignoreable_error(&mut self, diag: DiagInner) {
        self.has_non_ignorable_parser_errors = true;
        self.can_reset.store(false, Ordering::Release);
        self.emitter.emit_diagnostic(diag);
    }
}

impl Translate for SilentOnIgnoredFilesEmitter {
    fn fluent_bundle(&self) -> Option<&Lrc<rustc_errors::FluentBundle>> {
        self.emitter.fluent_bundle()
    }

    fn fallback_fluent_bundle(&self) -> &rustc_errors::FluentBundle {
        self.emitter.fallback_fluent_bundle()
    }
}

impl Emitter for SilentOnIgnoredFilesEmitter {
    fn source_map(&self) -> Option<&Lrc<SourceMap>> {
        None
    }

    fn emit_diagnostic(&mut self, diag: DiagInner) {
        if diag.level() == DiagnosticLevel::Fatal {
            return self.handle_non_ignoreable_error(diag);
        }
        self.handle_non_ignoreable_error(diag);
    }
}

fn default_dcx(
    source_map: Lrc<SourceMap>,
    can_reset: Lrc<AtomicBool>,
    hide_parse_errors: bool,
) -> DiagCtxt {
    let supports_color = term::stderr().map_or(false, |term| term.supports_color());
    let emit_color = if supports_color {
        ColorConfig::Auto
    } else {
        ColorConfig::Never
    };

    let fallback_bundle = rustc_errors::fallback_fluent_bundle(
        rustc_driver::DEFAULT_LOCALE_RESOURCES.to_vec(),
        false,
    );
    let emitter = Box::new(
        HumanEmitter::new(stderr_destination(emit_color), fallback_bundle.clone())
            .sm(Some(source_map.clone())),
    );

    let emitter: Box<DynEmitter> = if hide_parse_errors {
        Box::new(SilentEmitter {
            fallback_bundle,
            fatal_dcx: DiagCtxt::new(emitter),
            fatal_note: None,
            emit_fatal_diagnostic: false,
        })
    } else {
        emitter
    };
    DiagCtxt::new(Box::new(SilentOnIgnoredFilesEmitter {
        has_non_ignorable_parser_errors: false,
        emitter,
        can_reset,
    }))
}

fn create_parser_session() -> ParseSess {
    let source_map = Lrc::new(SourceMap::new(FilePathMapping::empty()));
    let can_reset_errors = Lrc::new(AtomicBool::new(false));

    let dcx = default_dcx(
        Lrc::clone(&source_map),
        Lrc::clone(&can_reset_errors),
        false,
    );
    ParseSess::with_dcx(dcx, source_map)
}

fn create_parser<'a>(file: &Path, sess: &'a ParseSess) -> Result<Parser<'a>, String> {
    catch_unwind(AssertUnwindSafe(move || {
        new_parser_from_file(sess, file, None)
    }))
    .map_err(|e| format!("failed to create parser: {:?}", e))
}

fn parse_crate(parser: &mut Parser) -> Result<Crate, String> {
    let mut parser = AssertUnwindSafe(parser);

    match catch_unwind(move || parser.parse_crate_mod()) {
        Ok(Ok(k)) => Ok(k),
        Ok(Err(db)) => {
            db.emit();
            Err(String::new())
        }
        Err(e) => Err(format!("parser panicked: {:?}", e)),
    }
}
