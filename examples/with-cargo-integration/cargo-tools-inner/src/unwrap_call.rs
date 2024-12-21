use rustc_hir::{Expr, ExprKind};
use rustc_lint::{LateContext, LateLintPass, LintContext};
use rustc_middle::ty;
use rustc_session::{declare_lint_pass, declare_tool_lint};
use rustc_span::sym;

declare_tool_lint! {
    // `tools` is the name of the binary here. It's required when creating a lint.
    pub tools::UNWRAP_CALL,
    Warn,
    "warns if `Option::unwrap` or `Result::unwrap` is called"
}
declare_lint_pass!(UnwrapCall => [UNWRAP_CALL]);

impl<'tcx> LateLintPass<'tcx> for UnwrapCall {
    fn check_expr(&mut self, cx: &LateContext<'tcx>, expr: &'tcx Expr<'tcx>) {
        match expr.kind {
            ExprKind::MethodCall(name, recv, _args, span) => {
                if name.ident.as_str() != "unwrap" {
                    return;
                }
                let caller_ty = cx.typeck_results().expr_ty(recv);
                let is_option_or_result = match caller_ty.kind() {
                    ty::Adt(adt, _) => {
                        cx.tcx.is_diagnostic_item(sym::Option, adt.did())
                            || cx.tcx.is_diagnostic_item(sym::Result, adt.did())
                    }
                    _ => false,
                };
                if !is_option_or_result {
                    return;
                }
                cx.span_lint(UNWRAP_CALL, span, |diag| {
                    diag.primary_message("avoid using `unwrap` if possible");
                });
            }
            _ => {}
        }
    }
}
