use std::panic::{catch_unwind, AssertUnwindSafe};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};

use rustc_ast::ast::Crate;
use rustc_data_structures::sync::{Lrc, Send};
use rustc_errors::emitter::{Emitter, EmitterWriter};
use rustc_errors::translation::Translate;
use rustc_errors::{ColorConfig, Diagnostic, Handler, Level as DiagnosticLevel};
use rustc_parse::new_parser_from_file;
use rustc_parse::parser::Parser;
use rustc_session::parse::ParseSess;
use rustc_span::edition::Edition;
use rustc_span::source_map::{FilePathMapping, SourceMap};
use rustc_span::FileName;

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
    source_map: Lrc<SourceMap>,
    emitter: Box<dyn Emitter + Send>,
    has_non_ignorable_parser_errors: bool,
    can_reset: Lrc<AtomicBool>,
}

impl SilentOnIgnoredFilesEmitter {
    fn handle_non_ignoreable_error(&mut self, db: &Diagnostic) {
        self.has_non_ignorable_parser_errors = true;
        self.can_reset.store(false, Ordering::Release);
        self.emitter.emit_diagnostic(db);
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
    fn emit_diagnostic(&mut self, db: &Diagnostic) {
        if db.level() == DiagnosticLevel::Fatal {
            return self.handle_non_ignoreable_error(db);
        }
        if let Some(primary_span) = &db.span.primary_span() {
            let file_name = self.source_map.span_to_filename(*primary_span);
            if let FileName::Real(rustc_span::RealFileName::LocalPath(_)) = file_name {
                if !self.has_non_ignorable_parser_errors {
                    self.can_reset.store(true, Ordering::Release);
                }
                return;
            };
        }
        self.handle_non_ignoreable_error(db);
    }
}

// Emitter which discards every error.
struct SilentEmitter;

impl Emitter for SilentEmitter {
    fn source_map(&self) -> Option<&Lrc<SourceMap>> {
        None
    }
    fn emit_diagnostic(&mut self, _db: &Diagnostic) {}
}

impl Translate for SilentEmitter {
    fn fluent_bundle(&self) -> Option<&Lrc<rustc_errors::FluentBundle>> {
        None
    }
    fn fallback_fluent_bundle(&self) -> &rustc_errors::FluentBundle {
        panic!("silent emitter attempted to translate a diagnostic");
    }
}

fn silent_emitter() -> Box<dyn Emitter + Send> {
    Box::new(SilentEmitter {})
}

fn default_handler(
    source_map: Lrc<SourceMap>,
    can_reset: Lrc<AtomicBool>,
    hide_parse_errors: bool,
) -> Handler {
    let supports_color = term::stderr().map_or(false, |term| term.supports_color());
    let color_cfg = if supports_color {
        ColorConfig::Auto
    } else {
        ColorConfig::Never
    };

    let emitter = if hide_parse_errors {
        silent_emitter()
    } else {
        let fallback_bundle =
            rustc_errors::fallback_fluent_bundle(rustc_errors::DEFAULT_LOCALE_RESOURCES, false);
        Box::new(EmitterWriter::stderr(
            color_cfg,
            Some(source_map.clone()),
            None,
            fallback_bundle,
            false,
            false,
            None,
            false,
            false,
        ))
    };
    Handler::with_emitter(
        true,
        None,
        Box::new(SilentOnIgnoredFilesEmitter {
            has_non_ignorable_parser_errors: false,
            source_map,
            emitter,
            can_reset,
        }),
    )
}

fn create_parser_session() -> ParseSess {
    let source_map = Lrc::new(SourceMap::new(FilePathMapping::empty()));
    let can_reset_errors = Lrc::new(AtomicBool::new(false));

    let handler = default_handler(
        Lrc::clone(&source_map),
        Lrc::clone(&can_reset_errors),
        false,
    );
    ParseSess::with_span_handler(handler, source_map)
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
        Ok(Err(mut db)) => {
            db.emit();
            Err(String::new())
        }
        Err(e) => Err(format!("parser panicked: {:?}", e)),
    }
}
