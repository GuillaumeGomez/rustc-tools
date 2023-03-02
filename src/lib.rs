#![feature(rustc_private)]
#![feature(once_cell)]
#![cfg_attr(doc, doc = include_str!("../README.md"))]

// We need to import them like this otherwise it doesn't work.
pub extern crate rustc_ast;
pub extern crate rustc_data_structures;
pub extern crate rustc_driver;
pub extern crate rustc_errors;
pub extern crate rustc_feature;
pub extern crate rustc_hir;
pub extern crate rustc_interface;
pub extern crate rustc_lexer;
pub extern crate rustc_lint;
pub extern crate rustc_middle;
pub extern crate rustc_parse;
pub extern crate rustc_session;
pub extern crate rustc_span;

mod ast;
mod hir;

pub use ast::with_ast_parser;
pub use hir::with_tyctxt;

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
