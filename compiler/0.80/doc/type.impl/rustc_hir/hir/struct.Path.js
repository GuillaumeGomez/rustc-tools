(function() {var type_impls = {
"rustc_hir":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Path%3C'hir,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#impl-Clone-for-Path%3C'hir,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'hir, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_hir/hir/struct.Path.html\" title=\"struct rustc_hir::hir::Path\">Path</a>&lt;'hir, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_hir/hir/struct.Path.html\" title=\"struct rustc_hir::hir::Path\">Path</a>&lt;'hir, R&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_hir::hir::UsePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Path%3C'hir,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#impl-Debug-for-Path%3C'hir,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'hir, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_hir/hir/struct.Path.html\" title=\"struct rustc_hir::hir::Path\">Path</a>&lt;'hir, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_hir::hir::UsePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-Path%3C'hir,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-Path%3C'hir,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'hir, R, __CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"struct\" href=\"rustc_hir/hir/struct.Path.html\" title=\"struct rustc_hir::hir::Path\">Path</a>&lt;'hir, R&gt;<div class=\"where\">where\n    __CTX: <a class=\"trait\" href=\"rustc_hir/stable_hash_impls/trait.HashStableContext.html\" title=\"trait rustc_hir::stable_hash_impls::HashStableContext\">HashStableContext</a>,\n    R: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(&amp;self, __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>, __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>)</h4></section></div></details>","HashStable<__CTX>","rustc_hir::hir::UsePath"],["<section id=\"impl-Copy-for-Path%3C'hir,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/hir.rs.html#170\">source</a><a href=\"#impl-Copy-for-Path%3C'hir,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'hir, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_hir/hir/struct.Path.html\" title=\"struct rustc_hir::hir::Path\">Path</a>&lt;'hir, R&gt;</h3></section>","Copy","rustc_hir::hir::UsePath"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()