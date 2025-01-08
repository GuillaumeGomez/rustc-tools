(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TraitImpls\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#impl-Debug-for-TraitImpls\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html\" title=\"struct rustc_middle::ty::trait_def::TraitImpls\">TraitImpls</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::trait_impls_of::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TraitImpls\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#impl-Default-for-TraitImpls\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html\" title=\"struct rustc_middle::ty::trait_def::TraitImpls\">TraitImpls</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html\" title=\"struct rustc_middle::ty::trait_def::TraitImpls\">TraitImpls</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_middle::query::queries::trait_impls_of::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-TraitImpls\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-TraitImpls\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html\" title=\"struct rustc_middle::ty::trait_def::TraitImpls\">TraitImpls</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#100\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>,\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::trait_impls_of::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TraitImpls\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#107-119\">source</a><a href=\"#impl-TraitImpls\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html\" title=\"struct rustc_middle::ty::trait_def::TraitImpls\">TraitImpls</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#108-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.blanket_impls\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#112-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html#tymethod.blanket_impls\" class=\"fn\">blanket_impls</a>(&amp;self) -&gt; &amp;[<a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>]</h4></section><section id=\"method.non_blanket_impls\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/trait_def.rs.html#116-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/trait_def/struct.TraitImpls.html#tymethod.non_blanket_impls\" class=\"fn\">non_blanket_impls</a>(&amp;self) -&gt; &amp;<a class=\"type\" href=\"rustc_data_structures/fx/type.FxIndexMap.html\" title=\"type rustc_data_structures::fx::FxIndexMap\">FxIndexMap</a>&lt;<a class=\"type\" href=\"rustc_middle/ty/fast_reject/type.SimplifiedType.html\" title=\"type rustc_middle::ty::fast_reject::SimplifiedType\">SimplifiedType</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>&gt;&gt;</h4></section></div></details>",0,"rustc_middle::query::queries::trait_impls_of::ProvidedValue"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[7422]}