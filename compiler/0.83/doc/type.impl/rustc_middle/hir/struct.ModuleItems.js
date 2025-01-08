(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ModuleItems\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#impl-Debug-for-ModuleItems\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_middle/hir/struct.ModuleItems.html\" title=\"struct rustc_middle::hir::ModuleItems\">ModuleItems</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::hir_crate_items::ProvidedValue","rustc_middle::query::queries::hir_module_items::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-ModuleItems\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-ModuleItems\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__D: <a class=\"trait\" href=\"rustc_span/trait.SpanDecoder.html\" title=\"trait rustc_span::SpanDecoder\">SpanDecoder</a>&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"struct\" href=\"rustc_middle/hir/struct.ModuleItems.html\" title=\"struct rustc_middle::hir::ModuleItems\">ModuleItems</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; Self</h4></section></div></details>","Decodable<__D>","rustc_middle::query::queries::hir_crate_items::ProvidedValue","rustc_middle::query::queries::hir_module_items::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-ModuleItems\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-ModuleItems\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__E: <a class=\"trait\" href=\"rustc_span/trait.SpanEncoder.html\" title=\"trait rustc_span::SpanEncoder\">SpanEncoder</a>&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"struct\" href=\"rustc_middle/hir/struct.ModuleItems.html\" title=\"struct rustc_middle::hir::ModuleItems\">ModuleItems</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::query::queries::hir_crate_items::ProvidedValue","rustc_middle::query::queries::hir_module_items::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ModuleItems\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ModuleItems\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/hir/struct.ModuleItems.html\" title=\"struct rustc_middle::hir::ModuleItems\">ModuleItems</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#24\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>,\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::hir_crate_items::ProvidedValue","rustc_middle::query::queries::hir_module_items::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ModuleItems\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#35-111\">source</a><a href=\"#impl-ModuleItems\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rustc_middle/hir/struct.ModuleItems.html\" title=\"struct rustc_middle::hir::ModuleItems\">ModuleItems</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.free_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#42-44\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.free_items\" class=\"fn\">free_items</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_hir/hir/struct.ItemId.html\" title=\"struct rustc_hir::hir::ItemId\">ItemId</a>&gt; + '_</h4></section></summary><div class=\"docblock\"><p>Returns all non-associated locally defined items in all modules.</p>\n<p>Note that this does <em>not</em> include associated items of <code>impl</code> blocks! It also does not\ninclude foreign items. If you want to e.g. get all functions, use <code>definitions()</code> below.</p>\n<p>However, this does include the <code>impl</code> blocks themselves.</p>\n</div></details><section id=\"method.trait_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#46-48\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.trait_items\" class=\"fn\">trait_items</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_hir/hir/struct.TraitItemId.html\" title=\"struct rustc_hir::hir::TraitItemId\">TraitItemId</a>&gt; + '_</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.impl_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#52-54\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.impl_items\" class=\"fn\">impl_items</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_hir/hir/struct.ImplItemId.html\" title=\"struct rustc_hir::hir::ImplItemId\">ImplItemId</a>&gt; + '_</h4></section></summary><div class=\"docblock\"><p>Returns all items that are associated with some <code>impl</code> block (both inherent and trait impl\nblocks).</p>\n</div></details><section id=\"method.foreign_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#56-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.foreign_items\" class=\"fn\">foreign_items</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_hir/hir/struct.ForeignItemId.html\" title=\"struct rustc_hir::hir::ForeignItemId\">ForeignItemId</a>&gt; + '_</h4></section><section id=\"method.owners\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#60-67\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.owners\" class=\"fn\">owners</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_hir/hir_id/struct.OwnerId.html\" title=\"struct rustc_hir::hir_id::OwnerId\">OwnerId</a>&gt; + '_</h4></section><section id=\"method.opaques\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#69-71\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.opaques\" class=\"fn\">opaques</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>&gt; + '_</h4></section><section id=\"method.definitions\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#73-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.definitions\" class=\"fn\">definitions</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>&gt; + '_</h4></section><section id=\"method.par_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#77-82\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.par_items\" class=\"fn\">par_items</a>(\n    &amp;self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_hir/hir/struct.ItemId.html\" title=\"struct rustc_hir::hir::ItemId\">ItemId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt; + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt;</h4></section><section id=\"method.par_trait_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#84-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.par_trait_items\" class=\"fn\">par_trait_items</a>(\n    &amp;self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_hir/hir/struct.TraitItemId.html\" title=\"struct rustc_hir::hir::TraitItemId\">TraitItemId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt; + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt;</h4></section><section id=\"method.par_impl_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#91-96\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.par_impl_items\" class=\"fn\">par_impl_items</a>(\n    &amp;self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_hir/hir/struct.ImplItemId.html\" title=\"struct rustc_hir::hir::ImplItemId\">ImplItemId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt; + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt;</h4></section><section id=\"method.par_foreign_items\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#98-103\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.par_foreign_items\" class=\"fn\">par_foreign_items</a>(\n    &amp;self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_hir/hir/struct.ForeignItemId.html\" title=\"struct rustc_hir::hir::ForeignItemId\">ForeignItemId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt; + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt;</h4></section><section id=\"method.par_opaques\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/hir/mod.rs.html#105-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/hir/struct.ModuleItems.html#tymethod.par_opaques\" class=\"fn\">par_opaques</a>(\n    &amp;self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt; + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> + <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>&gt;</h4></section></div></details>",0,"rustc_middle::query::queries::hir_crate_items::ProvidedValue","rustc_middle::query::queries::hir_module_items::ProvidedValue"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[20434]}