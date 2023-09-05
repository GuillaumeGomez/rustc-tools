#![feature(rustc_private)]
#![feature(lazy_cell)]
#![cfg_attr(doc, doc = include_str!("../README.md"))]

// We need to import them like this otherwise it doesn't work.
extern crate rustc_ast;
extern crate rustc_data_structures;
extern crate rustc_driver;
extern crate rustc_errors;
extern crate rustc_feature;
extern crate rustc_hir;
extern crate rustc_interface;
extern crate rustc_lexer;
extern crate rustc_lint;
extern crate rustc_lint_defs;
extern crate rustc_middle;
extern crate rustc_parse;
extern crate rustc_passes;
extern crate rustc_session;
extern crate rustc_span;

mod ast;
mod hir;
mod lint;

pub use ast::with_ast_parser;
pub use hir::with_tyctxt;
pub use lint::with_lints;

/// Error returned by the API. If the parser encounters a problem, it'll always be `Error::Parser`.
/// `Error::Other` is for users.
pub enum Error<E> {
    Parser(String),
    Other(E),
}

/// Very basic lexer which return a lexer iterator. It doesn't handle errors or anything. For more
/// advanced usage, take a look at [`with_ast_parser`] instead.
pub fn lexer(source_code: &str) -> rustc_lexer::Cursor<'_> {
    rustc_lexer::Cursor::new(source_code)
}
