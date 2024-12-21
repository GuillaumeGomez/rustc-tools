//! This example shows how to create lints and show two different kinds of lints: early and late.
//!
//! "early" lints are mostly the same level as the AST, so very few extra information can be
//! extracted from them but you can already do a lot of checks on the syntax itself.
//!
//! "late" lints have much more information and also gives you access to the `TyCtxt` type which
//! allows you to use the internal query engine.
//!
//! So to declare a lint, you need to do 4 things:
//!
//! 1. Create it with the `declare_tool_lint` macro.
//! 2. Create the struct which will be associated to this lint with the `declare_lint_pass` macro.
//! 3. Implement the corresponding trait on the struct (`EarlyLintPass` for "early" lints and
//!    `LateLintPass` for "late" lints).
//! 4. Register it into the `LintStore` with the corresponding register method (`register_late_pass`
//!    for "late" lints and `register_early_pass` for ealy lints).

#![feature(rustc_private)] // This feature must be added so we can use compiler APIs.

// We need to import them like this otherwise it doesn't work.
extern crate rustc_ast;
extern crate rustc_hir;
extern crate rustc_lint;
extern crate rustc_middle;
extern crate rustc_session;
extern crate rustc_span;

use rustc_lint::LintStore;
use rustc_tools::with_lints;

mod odd_function_line_count;
mod unwrap_call;
mod warn_generics;

fn main() {
    let cargo_args = std::env::args().skip(2).collect::<Vec<_>>();
    rustc_tools::cargo_integration(&cargo_args, |args| {
        with_lints(args, vec![], |store: &mut LintStore| {
            store.register_early_pass(|| Box::new(warn_generics::WarnGenerics));
            store.register_late_pass(|_| Box::new(odd_function_line_count::OddFunctionLineCount));
            store.register_late_pass(|_| Box::new(unwrap_call::UnwrapCall));
        }).expect("with_lints failed");
    }).expect("cargo_integration failed");
}
