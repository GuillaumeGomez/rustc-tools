(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Limits\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#impl-Clone-for-Limits\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::limits::Value","rustc_middle::query::queries::limits::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Limits\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#impl-Debug-for-Limits\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::limits::Value","rustc_middle::query::queries::limits::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-Limits\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#235-337\">source</a><a href=\"#impl-EraseType-for-Limits\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#235-337\">source</a><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">24</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::limits::Value","rustc_middle::query::queries::limits::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-Limits\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-Limits\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a><div class=\"where\">where\n    __CTX: <a class=\"trait\" href=\"rustc_session/trait.HashStableContext.html\" title=\"trait rustc_session::HashStableContext\">HashStableContext</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>,\n    __hasher: &amp;mut <a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_stable_hash::stable_hasher::StableHasher\">StableHasher</a>&lt;<a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/sip128/struct.SipHasher128.html\" title=\"struct rustc_stable_hash::sip128::SipHasher128\">SipHasher128</a>&gt;,\n)</h4></section></div></details>","HashStable<__CTX>","rustc_middle::query::queries::limits::Value","rustc_middle::query::queries::limits::ProvidedValue"],["<section id=\"impl-Copy-for-Limits\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_session/session.rs.html#121\">source</a><a href=\"#impl-Copy-for-Limits\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_session/session/struct.Limits.html\" title=\"struct rustc_session::session::Limits\">Limits</a></h3></section>","Copy","rustc_middle::query::queries::limits::Value","rustc_middle::query::queries::limits::ProvidedValue"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[7947]}