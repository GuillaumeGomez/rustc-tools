(function() {
    var type_impls = Object.fromEntries([["rustc_metadata",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#175-179\">source</a><a href=\"#impl-Clone-for-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#176-178\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3CDecodeContext%3C'a,+'tcx%3E%3E-for-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/decoder.rs.html#697-703\">source</a><a href=\"#impl-Decodable%3CDecodeContext%3C'a,+'tcx%3E%3E-for-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, 'tcx, I: <a class=\"trait\" href=\"rustc_index/idx/trait.Idx.html\" title=\"trait rustc_index::idx::Idx\">Idx</a>, T&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;<a class=\"struct\" href=\"rustc_metadata/rmeta/decoder/struct.DecodeContext.html\" title=\"struct rustc_metadata::rmeta::decoder::DecodeContext\">DecodeContext</a>&lt;'a, 'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/decoder.rs.html#698-702\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(decoder: &amp;mut <a class=\"struct\" href=\"rustc_metadata/rmeta/decoder/struct.DecodeContext.html\" title=\"struct rustc_metadata::rmeta::decoder::DecodeContext\">DecodeContext</a>&lt;'a, 'tcx&gt;) -&gt; Self</h4></section></div></details>","Decodable<DecodeContext<'a, 'tcx>>","rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3CEncodeContext%3C'a,+'tcx%3E%3E-for-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/encoder.rs.html#121-127\">source</a><a href=\"#impl-Encodable%3CEncodeContext%3C'a,+'tcx%3E%3E-for-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, 'tcx, I, T&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;<a class=\"struct\" href=\"rustc_metadata/rmeta/encoder/struct.EncodeContext.html\" title=\"struct rustc_metadata::rmeta::encoder::EncodeContext\">EncodeContext</a>&lt;'a, 'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/encoder.rs.html#122-126\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, e: &amp;mut <a class=\"struct\" href=\"rustc_metadata/rmeta/encoder/struct.EncodeContext.html\" title=\"struct rustc_metadata::rmeta::encoder::EncodeContext\">EncodeContext</a>&lt;'a, 'tcx&gt;)</h4></section></div></details>","Encodable<EncodeContext<'a, 'tcx>>","rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#150-158\">source</a><a href=\"#impl-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.from_position_and_encoded_size\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#151-157\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_metadata/rmeta/struct.LazyTable.html#tymethod.from_position_and_encoded_size\" class=\"fn\">from_position_and_encoded_size</a>(\n    position: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/struct.NonZero.html\" title=\"struct core::num::nonzero::NonZero\">NonZero</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    len: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h4></section></div></details>",0,"rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/table.rs.html#519-551\">source</a><a href=\"#impl-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"rustc_index/idx/trait.Idx.html\" title=\"trait rustc_index::idx::Idx\">Idx</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, T: <a class=\"trait\" href=\"rustc_metadata/rmeta/table/trait.FixedSizeEncoding.html\" title=\"trait rustc_metadata::rmeta::table::FixedSizeEncoding\">FixedSizeEncoding</a>&lt;ByteArray = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]&gt; + <a class=\"trait\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html\" title=\"trait rustc_middle::ty::parameterized::ParameterizedOverTcx\">ParameterizedOverTcx</a>&gt; <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;<div class=\"where\">where\n    for&lt;'tcx&gt; T::<a class=\"associatedtype\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html#associatedtype.Value\" title=\"type rustc_middle::ty::parameterized::ParameterizedOverTcx::Value\">Value</a>&lt;'tcx&gt;: <a class=\"trait\" href=\"rustc_metadata/rmeta/table/trait.FixedSizeEncoding.html\" title=\"trait rustc_metadata::rmeta::table::FixedSizeEncoding\">FixedSizeEncoding</a>&lt;ByteArray = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/table.rs.html#525-545\">source</a><h4 class=\"code-header\">pub(super) fn <a href=\"rustc_metadata/rmeta/struct.LazyTable.html#tymethod.get\" class=\"fn\">get</a>&lt;'a, 'tcx, M: <a class=\"trait\" href=\"rustc_metadata/rmeta/decoder/trait.Metadata.html\" title=\"trait rustc_metadata::rmeta::decoder::Metadata\">Metadata</a>&lt;'a, 'tcx&gt;&gt;(\n    &amp;self,\n    metadata: M,\n    i: I,\n) -&gt; T::<a class=\"associatedtype\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html#associatedtype.Value\" title=\"type rustc_middle::ty::parameterized::ParameterizedOverTcx::Value\">Value</a>&lt;'tcx&gt;</h4></section></summary><div class=\"docblock\"><p>Given the metadata, extract out the value at a particular index (if any).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/table.rs.html#548-550\">source</a><h4 class=\"code-header\">pub(super) fn <a href=\"rustc_metadata/rmeta/struct.LazyTable.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Size of the table in entries, including possible gaps.</p>\n</div></details></div></details>",0,"rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParameterizedOverTcx-for-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#146-148\">source</a><a href=\"#impl-ParameterizedOverTcx-for-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: 'static, T: <a class=\"trait\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html\" title=\"trait rustc_middle::ty::parameterized::ParameterizedOverTcx\">ParameterizedOverTcx</a>&gt; <a class=\"trait\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html\" title=\"trait rustc_middle::ty::parameterized::ParameterizedOverTcx\">ParameterizedOverTcx</a> for <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#147\">source</a><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html#associatedtype.Value\" class=\"associatedtype\">Value</a>&lt;'tcx&gt; = <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, &lt;T as <a class=\"trait\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html\" title=\"trait rustc_middle::ty::parameterized::ParameterizedOverTcx\">ParameterizedOverTcx</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html#associatedtype.Value\" title=\"type rustc_middle::ty::parameterized::ParameterizedOverTcx::Value\">Value</a>&lt;'tcx&gt;&gt;</h4></section></div></details>","ParameterizedOverTcx","rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"],["<section id=\"impl-Copy-for-LazyTable%3CI,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_metadata/rmeta/mod.rs.html#174\">source</a><a href=\"#impl-Copy-for-LazyTable%3CI,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_metadata/rmeta/struct.LazyTable.html\" title=\"struct rustc_metadata::rmeta::LazyTable\">LazyTable</a>&lt;I, T&gt;</h3></section>","Copy","rustc_metadata::rmeta::SyntaxContextTable","rustc_metadata::rmeta::ExpnDataTable","rustc_metadata::rmeta::ExpnHashTable"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13642]}