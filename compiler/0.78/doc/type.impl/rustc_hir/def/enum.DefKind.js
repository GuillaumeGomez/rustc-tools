(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Clone-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Debug-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__D&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a><div class=\"where\">where\n    __D: <a class=\"trait\" href=\"rustc_span/trait.SpanDecoder.html\" title=\"trait rustc_span::SpanDecoder\">SpanDecoder</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h4></section></div></details>","Decodable<__D>","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#133\">source</a><a href=\"#impl-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.descr\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#139\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.descr\" class=\"fn\">descr</a>(self, def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>) -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Get an English description for the item’s kind.</p>\n<p>If you have access to <code>TyCtxt</code>, use <code>TyCtxt::def_descr</code> or\n<code>TyCtxt::def_kind_descr</code> instead, because they give better\ninformation for coroutines and associated functions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.article\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#183\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.article\" class=\"fn\">article</a>(&amp;self) -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Gets an English article for the definition.</p>\n<p>If you have access to <code>TyCtxt</code>, use <code>TyCtxt::def_descr_article</code> or\n<code>TyCtxt::def_kind_descr_article</code> instead, because they give better\ninformation for coroutines and associated functions.</p>\n</div></details><section id=\"method.ns\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#199\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.ns\" class=\"fn\">ns</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustc_hir/def/enum.Namespace.html\" title=\"enum rustc_hir::def::Namespace\">Namespace</a>&gt;</h4></section><section id=\"method.def_path_data\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#238\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.def_path_data\" class=\"fn\">def_path_data</a>(self, name: <a class=\"struct\" href=\"rustc_span/symbol/struct.Symbol.html\" title=\"struct rustc_span::symbol::Symbol\">Symbol</a>) -&gt; <a class=\"enum\" href=\"rustc_hir/definitions/enum.DefPathData.html\" title=\"enum rustc_hir::definitions::DefPathData\">DefPathData</a></h4></section><section id=\"method.is_fn_like\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#278\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.is_fn_like\" class=\"fn\">is_fn_like</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_codegen_attrs\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#283\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_hir/def/enum.DefKind.html#tymethod.has_codegen_attrs\" class=\"fn\">has_codegen_attrs</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Whether <code>query get_codegen_attrs</code> should be used with this definition.</p>\n</div></details></div></details>",0,"rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__E&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a><div class=\"where\">where\n    __E: <a class=\"trait\" href=\"rustc_span/trait.SpanEncoder.html\" title=\"trait rustc_span::SpanEncoder\">SpanEncoder</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#222-321\">source</a><a href=\"#impl-EraseType-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">3</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Hash-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a><div class=\"where\">where\n    __CTX: <a class=\"trait\" href=\"rustc_hir/stable_hash_impls/trait.HashStableContext.html\" title=\"trait rustc_hir::stable_hash_impls::HashStableContext\">HashStableContext</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(&amp;self, __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>, __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>)</h4></section></div></details>","HashStable<__CTX>","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParameterizedOverTcx-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/parameterized.rs.html#52-111\">source</a><a href=\"#impl-ParameterizedOverTcx-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html\" title=\"trait rustc_middle::ty::parameterized::ParameterizedOverTcx\">ParameterizedOverTcx</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/ty/parameterized/trait.ParameterizedOverTcx.html#associatedtype.Value\" class=\"associatedtype\">Value</a>&lt;'tcx&gt; = <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h4></section></div></details>","ParameterizedOverTcx","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-PartialEq-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<section id=\"impl-Copy-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Copy-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section>","Copy","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<section id=\"impl-Eq-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-Eq-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section>","Eq","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"],["<section id=\"impl-StructuralPartialEq-for-DefKind\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_hir/def.rs.html#51\">source</a><a href=\"#impl-StructuralPartialEq-for-DefKind\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"rustc_hir/def/enum.DefKind.html\" title=\"enum rustc_hir::def::DefKind\">DefKind</a></h3></section>","StructuralPartialEq","rustc_middle::query::queries::def_kind::Value","rustc_middle::query::queries::def_kind::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()