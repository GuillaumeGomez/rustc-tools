(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Clone-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2065-2069\">source</a><a href=\"#impl-Debug-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2066-2068\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3CD%3E-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/codec.rs.html#316-320\">source</a><a href=\"#impl-Decodable%3CD%3E-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, D: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyDecoder.html\" title=\"trait rustc_middle::ty::TyDecoder\">TyDecoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;D&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/codec.rs.html#317-319\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut D</a>) -&gt; Self</h4></section></div></details>","Decodable<D>","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2059-2063\">source</a><a href=\"#impl-Display-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2060-2062\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, __E: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyEncoder.html\" title=\"trait rustc_middle::ty::TyEncoder\">TyEncoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#333-370\">source</a><a href=\"#impl-EraseType-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Hash-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, '__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"struct\" href=\"rustc_data_structures/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_data_structures::stable_hasher::StableHasher\">StableHasher</a>\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Ord-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#851-853\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#871-873\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#896-899\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-PartialEq-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-PartialOrd-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1171\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1188\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1204\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1221\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2053-2057\">source</a><a href=\"#impl-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2054-2056\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/struct.SymbolName.html#tymethod.new\" class=\"fn\">new</a>(tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h4></section></div></details>",0,"rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Value%3CTyCtxt%3C'tcx%3E%3E-for-SymbolName%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/values.rs.html#32-42\">source</a><a href=\"#impl-Value%3CTyCtxt%3C'tcx%3E%3E-for-SymbolName%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_query_system/values/trait.Value.html\" title=\"trait rustc_query_system::values::Value\">Value</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.from_cycle_error\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/values.rs.html#33-41\">source</a><a href=\"#method.from_cycle_error\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/values/trait.Value.html#tymethod.from_cycle_error\" class=\"fn\">from_cycle_error</a>(\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    _: &amp;<a class=\"struct\" href=\"rustc_query_system/query/plumbing/struct.CycleError.html\" title=\"struct rustc_query_system::query::plumbing::CycleError\">CycleError</a>,\n    _guar: <a class=\"struct\" href=\"rustc_span/struct.ErrorGuaranteed.html\" title=\"struct rustc_span::ErrorGuaranteed\">ErrorGuaranteed</a>\n) -&gt; Self</h4></section></div></details>","Value<TyCtxt<'tcx>>","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<section id=\"impl-Copy-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Copy-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section>","Copy","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<section id=\"impl-Eq-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-Eq-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section>","Eq","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"],["<section id=\"impl-StructuralPartialEq-for-SymbolName%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/mod.rs.html#2047\">source</a><a href=\"#impl-StructuralPartialEq-for-SymbolName%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"rustc_middle/ty/struct.SymbolName.html\" title=\"struct rustc_middle::ty::SymbolName\">SymbolName</a>&lt;'tcx&gt;</h3></section>","StructuralPartialEq","rustc_middle::query::queries::symbol_name::Value","rustc_middle::query::queries::symbol_name::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()