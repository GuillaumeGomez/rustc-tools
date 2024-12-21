use rustc_hir::def_id::LocalDefId;
use rustc_hir::intravisit::FnKind;
use rustc_hir::{Body, FnDecl};
use rustc_lint::{LateContext, LateLintPass, LintContext};
use rustc_session::{declare_lint_pass, declare_tool_lint};
use rustc_span::Span;

declare_tool_lint! {
    // `tools` is the name of the binary here. It's required when creating a lint.
    pub tools::ODD_FUNCTION_LINE_COUNT,
    Deny,
    "errors if a function has an odd number of lines"
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
                cx.span_lint(ODD_FUNCTION_LINE_COUNT, span, |diag| {
                    diag.primary_message("functions with odd number of lines should not exist");
                });
            }
        }
    }
}
