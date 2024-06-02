(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#600\">source</a><a href=\"#impl-Clone-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#600\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#600\">source</a><a href=\"#impl-Debug-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#600\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#222-321\">source</a><a href=\"#impl-EraseType-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#601\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#601\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Value%3CTyCtxt%3C'tcx%3E%3E-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/values.rs.html#78-112\">source</a><a href=\"#impl-Value%3CTyCtxt%3C'tcx%3E%3E-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_query_system/values/trait.Value.html\" title=\"trait rustc_query_system::values::Value\">Value</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.from_cycle_error\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/values.rs.html#79-111\">source</a><a href=\"#method.from_cycle_error\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/values/trait.Value.html#tymethod.from_cycle_error\" class=\"fn\">from_cycle_error</a>(\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    cycle_error: &amp;<a class=\"struct\" href=\"rustc_query_system/query/plumbing/struct.CycleError.html\" title=\"struct rustc_query_system::query::plumbing::CycleError\">CycleError</a>,\n    _guar: <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>\n) -&gt; Self</h4></section></div></details>","Value<TyCtxt<'tcx>>","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"],["<section id=\"impl-Copy-for-Representability\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/adt.rs.html#600\">source</a><a href=\"#impl-Copy-for-Representability\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_middle/ty/adt/enum.Representability.html\" title=\"enum rustc_middle::ty::adt::Representability\">Representability</a></h3></section>","Copy","rustc_middle::query::queries::representability::Value","rustc_middle::query::queries::representability::ProvidedValue","rustc_middle::query::queries::representability_adt_ty::Value","rustc_middle::query::queries::representability_adt_ty::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()