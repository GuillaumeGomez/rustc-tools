(function() {
    var type_impls = Object.fromEntries([["rustc_error_messages",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#impl-Clone-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_error_messages::FluentBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#245\">source</a><a href=\"#impl-Deref-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#246\">source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#249\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","rustc_error_messages::FluentBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#254\">source</a><a href=\"#impl-DerefMut-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#256\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","rustc_error_messages::FluentBundle"],["<section id=\"impl-Copy-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#impl-Copy-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Copy","rustc_error_messages::FluentBundle"],["<section id=\"impl-DynSend-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#241\">source</a><a href=\"#impl-DynSend-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","DynSend","rustc_error_messages::FluentBundle"],["<section id=\"impl-DynSync-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/src/rustc_data_structures/marker.rs.html#243\">source</a><a href=\"#impl-DynSync-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","DynSync","rustc_error_messages::FluentBundle"]]],["rustc_errors",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#impl-Clone-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_errors::FluentBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#245\">source</a><a href=\"#impl-Deref-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#246\">source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#249\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","rustc_errors::FluentBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#254\">source</a><a href=\"#impl-DerefMut-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#256\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","rustc_errors::FluentBundle"],["<section id=\"impl-Copy-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#237\">source</a><a href=\"#impl-Copy-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Copy","rustc_errors::FluentBundle"],["<section id=\"impl-DynSend-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#241\">source</a><a href=\"#impl-DynSend-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSend.html\" title=\"trait rustc_data_structures::marker::DynSend\">DynSend</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","DynSend","rustc_errors::FluentBundle"],["<section id=\"impl-DynSync-for-IntoDynSyncSend%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/marker.rs.html#243\">source</a><a href=\"#impl-DynSync-for-IntoDynSyncSend%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"rustc_data_structures/marker/trait.DynSync.html\" title=\"trait rustc_data_structures::marker::DynSync\">DynSync</a> for <a class=\"struct\" href=\"rustc_data_structures/marker/struct.IntoDynSyncSend.html\" title=\"struct rustc_data_structures::marker::IntoDynSyncSend\">IntoDynSyncSend</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","DynSync","rustc_errors::FluentBundle"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[9768,8801]}