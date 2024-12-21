use rustc_lint::{EarlyContext, EarlyLintPass, LintContext};
use rustc_session::{declare_lint_pass, declare_tool_lint};

declare_tool_lint! {
    // `tools` is the name of the binary here. It's required when creating a lint.
    pub tools::WARN_GENERICS,
    Warn,
    "warns if any item has generics"
}
declare_lint_pass!(WarnGenerics => [WARN_GENERICS]);

// `WarnGenerics` was declared in `declare_lint_pass`.
impl EarlyLintPass for WarnGenerics {
    fn check_item(&mut self, cx: &EarlyContext<'_>, item: &rustc_ast::Item) {
        if let Some(generics) = item.kind.generics() {
            if generics.params.is_empty() {
                return;
            }
            cx.span_lint(WARN_GENERICS, generics.span, |diag| {
                diag.primary_message("generics are ugly");
            });
        }
    }
}
