(function() {var type_impls = {
"rustc_infer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-Clone-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/structural_impls.rs.html#7\">source</a><a href=\"#impl-Debug-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/structural_impls.rs.html#8\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N, __D&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"rustc_type_ir/codec/trait.TyDecoder.html\" title=\"trait rustc_type_ir::codec::TyDecoder\">TyDecoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,\n    <a class=\"struct\" href=\"rustc_infer/traits/struct.ImplSourceUserDefinedData.html\" title=\"struct rustc_infer::traits::ImplSourceUserDefinedData\">ImplSourceUserDefinedData</a>&lt;'tcx, N&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;N&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;</h4></section></div></details>","Decodable<__D>","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N, __E&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    __E: <a class=\"trait\" href=\"rustc_type_ir/codec/trait.TyEncoder.html\" title=\"trait rustc_type_ir::codec::TyEncoder\">TyEncoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,\n    <a class=\"struct\" href=\"rustc_infer/traits/struct.ImplSourceUserDefinedData.html\" title=\"struct rustc_infer::traits::ImplSourceUserDefinedData\">ImplSourceUserDefinedData</a>&lt;'tcx, N&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;N&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, '__ctx, N&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#683\">source</a><a href=\"#impl-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.nested_obligations\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#684\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_infer/traits/enum.ImplSource.html#tymethod.nested_obligations\" class=\"fn\">nested_obligations</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;N&gt;</h4></section><section id=\"method.borrow_nested_obligations\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#691\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_infer/traits/enum.ImplSource.html#tymethod.borrow_nested_obligations\" class=\"fn\">borrow_nested_obligations</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[N]</a></h4></section><section id=\"method.borrow_nested_obligations_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#698\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_infer/traits/enum.ImplSource.html#tymethod.borrow_nested_obligations_mut\" class=\"fn\">borrow_nested_obligations_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[N]</a></h4></section><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#705-707\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_infer/traits/enum.ImplSource.html#tymethod.map\" class=\"fn\">map</a>&lt;M, F&gt;(self, f: F) -&gt; <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, M&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(N) -&gt; M,</div></h4></section></div></details>",0,"rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-PartialEq-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CTyCtxt%3C'tcx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#668\">source</a><a href=\"#impl-TypeFoldable%3CTyCtxt%3C'tcx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"rustc_type_ir/fold/trait.TypeFoldable.html\" title=\"trait rustc_type_ir::fold::TypeFoldable\">TypeFoldable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"rustc_type_ir/fold/trait.TypeFoldable.html\" title=\"trait rustc_type_ir::fold::TypeFoldable\">TypeFoldable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#668\">source</a><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_type_ir/fold/trait.TypeFoldable.html#tymethod.try_fold_with\" class=\"fn\">try_fold_with</a>&lt;__F&gt;(\n    self,\n    __folder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __F</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;, &lt;__F as <a class=\"trait\" href=\"rustc_type_ir/fold/trait.FallibleTypeFolder.html\" title=\"trait rustc_type_ir::fold::FallibleTypeFolder\">FallibleTypeFolder</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_type_ir/fold/trait.FallibleTypeFolder.html#associatedtype.Error\" title=\"type rustc_type_ir::fold::FallibleTypeFolder::Error\">Error</a>&gt;<div class=\"where\">where\n    __F: <a class=\"trait\" href=\"rustc_type_ir/fold/trait.FallibleTypeFolder.html\" title=\"trait rustc_type_ir::fold::FallibleTypeFolder\">FallibleTypeFolder</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,</div></h4></section></summary><div class='docblock'>The entry point for folding. To fold a value <code>t</code> with a folder <code>f</code>\ncall: <code>t.try_fold_with(f)</code>. <a href=\"rustc_type_ir/fold/trait.TypeFoldable.html#tymethod.try_fold_with\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/fold.rs.html#87\">source</a><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_type_ir/fold/trait.TypeFoldable.html#method.fold_with\" class=\"fn\">fold_with</a>&lt;F&gt;(self, folder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>) -&gt; Self<div class=\"where\">where\n    F: <a class=\"trait\" href=\"rustc_type_ir/fold/trait.TypeFolder.html\" title=\"trait rustc_type_ir::fold::TypeFolder\">TypeFolder</a>&lt;I&gt;,</div></h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<TyCtxt<'tcx>>","rustc_infer::traits::Selection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CTyCtxt%3C'tcx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#668\">source</a><a href=\"#impl-TypeVisitable%3CTyCtxt%3C'tcx%3E%3E-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"rustc_type_ir/visit/trait.TypeVisitable.html\" title=\"trait rustc_type_ir::visit::TypeVisitable\">TypeVisitable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"rustc_type_ir/visit/trait.TypeVisitable.html\" title=\"trait rustc_type_ir::visit::TypeVisitable\">TypeVisitable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#668\">source</a><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_type_ir/visit/trait.TypeVisitable.html#tymethod.visit_with\" class=\"fn\">visit_with</a>&lt;__V&gt;(\n    &amp;self,\n    __visitor: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __V</a>\n) -&gt; &lt;__V as <a class=\"trait\" href=\"rustc_type_ir/visit/trait.TypeVisitor.html\" title=\"trait rustc_type_ir::visit::TypeVisitor\">TypeVisitor</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_type_ir/visit/trait.TypeVisitor.html#associatedtype.Result\" title=\"type rustc_type_ir::visit::TypeVisitor::Result\">Result</a><div class=\"where\">where\n    __V: <a class=\"trait\" href=\"rustc_type_ir/visit/trait.TypeVisitor.html\" title=\"trait rustc_type_ir::visit::TypeVisitor\">TypeVisitor</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;,</div></h4></section></summary><div class='docblock'>The entry point for visiting. To visit a value <code>t</code> with a visitor <code>v</code>\ncall: <code>t.visit_with(v)</code>. <a href=\"rustc_type_ir/visit/trait.TypeVisitable.html#tymethod.visit_with\">Read more</a></div></details></div></details>","TypeVisitable<TyCtxt<'tcx>>","rustc_infer::traits::Selection"],["<section id=\"impl-Eq-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-Eq-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","rustc_infer::traits::Selection"],["<section id=\"impl-StructuralPartialEq-for-ImplSource%3C'tcx,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/traits/mod.rs.html#667\">source</a><a href=\"#impl-StructuralPartialEq-for-ImplSource%3C'tcx,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"rustc_infer/traits/enum.ImplSource.html\" title=\"enum rustc_infer::traits::ImplSource\">ImplSource</a>&lt;'tcx, N&gt;</h3></section>","StructuralPartialEq","rustc_infer::traits::Selection"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()