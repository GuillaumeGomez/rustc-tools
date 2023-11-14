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
extern crate rustc_session;
extern crate rustc_span;

use rustc_hir::def_id::LocalDefId;
use rustc_hir::intravisit::FnKind;
use rustc_hir::{Body, FnDecl};
use rustc_lint::{EarlyContext, EarlyLintPass, LateContext, LateLintPass, LintContext, LintStore};
use rustc_session::{declare_lint_pass, declare_tool_lint};
use rustc_span::Span;
use rustc_tools::with_lints;

declare_tool_lint! {
    // `lint` is the name of the binary here. It's required when creating a lint.
    pub lint::WARN_GENERICS,
    Warn,
    "warns if any item has generics",
    report_in_external_macro: false
}
declare_lint_pass!(WarnGenerics => [WARN_GENERICS]);

// `WarnGenerics` was declared in `declare_lint_pass`.
impl EarlyLintPass for WarnGenerics {
    fn check_item(&mut self, cx: &EarlyContext<'_>, item: &rustc_ast::Item) {
        if let Some(generics) = item.kind.generics() {
            if generics.params.is_empty() {
                return;
            }
            cx.struct_span_lint(WARN_GENERICS, generics.span, "generics are ugly", |diag| {
                diag
            });
        }
    }
}

declare_tool_lint! {
    // `lint` is the name of the binary here. It's required when creating a lint.
    pub lint::ODD_FUNCTION_LINE_COUNT,
    Deny,
    "errors if a function has an odd number of lines",
    report_in_external_macro: false
}
declare_lint_pass!(OddFunctionLineCount => [ODD_FUNCTION_LINE_COUNT]);

// `OddFunctionLineCount` was declared in `declare_lint_pass`.
impl LateLintPass<'_> for OddFunctionLineCount {
    fn check_fn(
        &mut self,
        cx: &LateContext<'_>,
        _: FnKind<'_>,
        _: &FnDecl<'_>,
        body: &Body<'_>,
        span: Span,
        _: LocalDefId,
    ) {
        if span.from_expansion() {
            // If this function was generated from a macro, we don't want to check it.
            return;
        }
        // In here, to get the number of lines in the function, we don't take the function's
        // `Span` but its body's instead.
        if let Ok(code) = cx.sess().source_map().span_to_snippet(body.value.span) {
            // We need to remove the parens (`{}`) from the string.
            let code = &code[1..code.len() - 1];
            if !code.is_empty() && code.split('\n').count() % 2 != 0 {
                // This is an odd number of lines, we don't allow that!
                cx.struct_span_lint(
                    ODD_FUNCTION_LINE_COUNT,
                    span,
                    "functions with odd number of lines should not exist",
                    |diag| diag,
                );
            }
        }
    }
}

fn main() -> Result<(), ()> {
    let args: Vec<String> = std::env::args().collect();
    if args.is_empty() {
        eprintln!("Missing file operand");
        return Err(());
    }
    println!("Running lint example with arguments `{:?}`", args);
    with_lints(&args, vec![], |store: &mut LintStore| {
        store.register_early_pass(|| Box::new(WarnGenerics));
        store.register_late_pass(|_| Box::new(OddFunctionLineCount));
    })
    .map_err(|_| ())
}
