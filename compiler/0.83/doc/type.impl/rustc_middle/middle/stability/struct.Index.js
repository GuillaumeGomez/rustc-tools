(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Index\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#63\">source</a><a href=\"#impl-Debug-for-Index\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_middle/middle/stability/struct.Index.html\" title=\"struct rustc_middle::middle::stability::Index\">Index</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#63\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::stability_index::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-Index\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#63\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-Index\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/middle/stability/struct.Index.html\" title=\"struct rustc_middle::middle::stability::Index\">Index</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#63\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>,\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::stability_index::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#86-102\">source</a><a href=\"#impl-Index\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rustc_middle/middle/stability/struct.Index.html\" title=\"struct rustc_middle::middle::stability::Index\">Index</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.local_stability\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#87-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/middle/stability/struct.Index.html#tymethod.local_stability\" class=\"fn\">local_stability</a>(&amp;self, def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_attr/builtin/struct.Stability.html\" title=\"struct rustc_attr::builtin::Stability\">Stability</a>&gt;</h4></section><section id=\"method.local_const_stability\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#91-93\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/middle/stability/struct.Index.html#tymethod.local_const_stability\" class=\"fn\">local_const_stability</a>(\n    &amp;self,\n    def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_attr/builtin/struct.ConstStability.html\" title=\"struct rustc_attr::builtin::ConstStability\">ConstStability</a>&gt;</h4></section><section id=\"method.local_default_body_stability\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#95-97\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/middle/stability/struct.Index.html#tymethod.local_default_body_stability\" class=\"fn\">local_default_body_stability</a>(\n    &amp;self,\n    def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_attr/builtin/struct.DefaultBodyStability.html\" title=\"struct rustc_attr::builtin::DefaultBodyStability\">DefaultBodyStability</a>&gt;</h4></section><section id=\"method.local_deprecation_entry\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/middle/stability.rs.html#99-101\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/middle/stability/struct.Index.html#tymethod.local_deprecation_entry\" class=\"fn\">local_deprecation_entry</a>(\n    &amp;self,\n    def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.LocalDefId.html\" title=\"struct rustc_span::def_id::LocalDefId\">LocalDefId</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_middle/middle/stability/struct.DeprecationEntry.html\" title=\"struct rustc_middle::middle::stability::DeprecationEntry\">DeprecationEntry</a>&gt;</h4></section></div></details>",0,"rustc_middle::query::queries::stability_index::ProvidedValue"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[7323]}