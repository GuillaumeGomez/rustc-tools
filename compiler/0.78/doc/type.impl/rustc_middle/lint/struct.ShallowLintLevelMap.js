(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ShallowLintLevelMap\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#impl-Debug-for-ShallowLintLevelMap\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html\" title=\"struct rustc_middle::lint::ShallowLintLevelMap\">ShallowLintLevelMap</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::shallow_lint_levels_on::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ShallowLintLevelMap\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#impl-Default-for-ShallowLintLevelMap\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html\" title=\"struct rustc_middle::lint::ShallowLintLevelMap\">ShallowLintLevelMap</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html\" title=\"struct rustc_middle::lint::ShallowLintLevelMap\">ShallowLintLevelMap</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_middle::query::queries::shallow_lint_levels_on::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ShallowLintLevelMap\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ShallowLintLevelMap\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html\" title=\"struct rustc_middle::lint::ShallowLintLevelMap\">ShallowLintLevelMap</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#62\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::shallow_lint_levels_on::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ShallowLintLevelMap\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#114-163\">source</a><a href=\"#impl-ShallowLintLevelMap\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html\" title=\"struct rustc_middle::lint::ShallowLintLevelMap\">ShallowLintLevelMap</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.probe_for_lint_level\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#118\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html#tymethod.probe_for_lint_level\" class=\"fn\">probe_for_lint_level</a>(\n    &amp;self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'_&gt;,\n    id: <a class=\"struct\" href=\"rustc_lint_defs/struct.LintId.html\" title=\"struct rustc_lint_defs::LintId\">LintId</a>,\n    start: <a class=\"struct\" href=\"rustc_hir/hir_id/struct.HirId.html\" title=\"struct rustc_hir::hir_id::HirId\">HirId</a>\n) -&gt; (<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustc_lint_defs/enum.Level.html\" title=\"enum rustc_lint_defs::Level\">Level</a>&gt;, <a class=\"enum\" href=\"rustc_middle/lint/enum.LintLevelSource.html\" title=\"enum rustc_middle::lint::LintLevelSource\">LintLevelSource</a>)</h4></section></summary><div class=\"docblock\"><p>Perform a deep probe in the HIR tree looking for the actual level for the lint.\nThis lint level is not usable for diagnostics, it needs to be corrected by\n<code>reveal_actual_level</code> beforehand.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lint_level_id_at_node\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/lint.rs.html#150\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/lint/struct.ShallowLintLevelMap.html#tymethod.lint_level_id_at_node\" class=\"fn\">lint_level_id_at_node</a>(\n    &amp;self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'_&gt;,\n    lint: <a class=\"struct\" href=\"rustc_lint_defs/struct.LintId.html\" title=\"struct rustc_lint_defs::LintId\">LintId</a>,\n    cur: <a class=\"struct\" href=\"rustc_hir/hir_id/struct.HirId.html\" title=\"struct rustc_hir::hir_id::HirId\">HirId</a>\n) -&gt; (<a class=\"enum\" href=\"rustc_lint_defs/enum.Level.html\" title=\"enum rustc_lint_defs::Level\">Level</a>, <a class=\"enum\" href=\"rustc_middle/lint/enum.LintLevelSource.html\" title=\"enum rustc_middle::lint::LintLevelSource\">LintLevelSource</a>)</h4></section></summary><div class=\"docblock\"><p>Fetch and return the user-visible lint level for the given lint at the given HirId.</p>\n</div></details></div></details>",0,"rustc_middle::query::queries::shallow_lint_levels_on::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()