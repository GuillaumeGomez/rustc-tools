(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Clone-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Debug-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__D&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a><div class=\"where\">where\n    __D: <a class=\"trait\" href=\"rustc_span/trait.SpanDecoder.html\" title=\"trait rustc_span::SpanDecoder\">SpanDecoder</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h4></section></div></details>","Decodable<__D>","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__E&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a><div class=\"where\">where\n    __E: <a class=\"trait\" href=\"rustc_span/trait.SpanEncoder.html\" title=\"trait rustc_span::SpanEncoder\">SpanEncoder</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#229-331\">source</a><a href=\"#impl-EraseType-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Hash-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;__CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a><div class=\"where\">where\n    __CTX: <a class=\"trait\" href=\"rustc_abi/trait.HashStableContext.html\" title=\"trait rustc_abi::HashStableContext\">HashStableContext</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>,\n    __hasher: &amp;mut <a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_stable_hash::stable_hasher::StableHasher\">StableHasher</a>&lt;<a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/sip128/struct.SipHasher128.html\" title=\"struct rustc_stable_hash::sip128::SipHasher128\">SipHasher128</a>&gt;,\n)</h4></section></div></details>","HashStable<__CTX>","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoDiagArg-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_errors/diagnostic_impls.rs.html#192\">source</a><a href=\"#impl-IntoDiagArg-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_errors/diagnostic/trait.IntoDiagArg.html\" title=\"trait rustc_errors::diagnostic::IntoDiagArg\">IntoDiagArg</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.into_diag_arg\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_errors/diagnostic_impls.rs.html#193\">source</a><a href=\"#method.into_diag_arg\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_errors/diagnostic/trait.IntoDiagArg.html#tymethod.into_diag_arg\" class=\"fn\">into_diag_arg</a>(self) -&gt; <a class=\"enum\" href=\"rustc_errors/diagnostic/enum.DiagArgValue.html\" title=\"enum rustc_errors::diagnostic::DiagArgValue\">DiagArgValue</a></h4></section></div></details>","IntoDiagArg","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#782\">source</a><a href=\"#impl-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.desc\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#783\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_target/spec/enum.PanicStrategy.html#tymethod.desc\" class=\"fn\">desc</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section><section id=\"method.desc_symbol\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#790\">source</a><h4 class=\"code-header\">pub const fn <a href=\"rustc_target/spec/enum.PanicStrategy.html#tymethod.desc_symbol\" class=\"fn\">desc_symbol</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_span/symbol/struct.Symbol.html\" title=\"struct rustc_span::symbol::Symbol\">Symbol</a></h4></section><section id=\"method.all\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#797\">source</a><h4 class=\"code-header\">pub const fn <a href=\"rustc_target/spec/enum.PanicStrategy.html#tymethod.all\" class=\"fn\">all</a>() -&gt; [<a class=\"struct\" href=\"rustc_span/symbol/struct.Symbol.html\" title=\"struct rustc_span::symbol::Symbol\">Symbol</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]</h4></section></div></details>",0,"rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-PartialEq-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToJson-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#802\">source</a><a href=\"#impl-ToJson-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rustc_target/json/trait.ToJson.html\" title=\"trait rustc_target::json::ToJson\">ToJson</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.to_json\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#803\">source</a><a href=\"#method.to_json\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_target/json/trait.ToJson.html#tymethod.to_json\" class=\"fn\">to_json</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a></h4></section></div></details>","ToJson","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<section id=\"impl-Copy-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-Copy-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section>","Copy","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"],["<section id=\"impl-StructuralPartialEq-for-PanicStrategy\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_target/spec/mod.rs.html#768\">source</a><a href=\"#impl-StructuralPartialEq-for-PanicStrategy\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"rustc_target/spec/enum.PanicStrategy.html\" title=\"enum rustc_target::spec::PanicStrategy\">PanicStrategy</a></h3></section>","StructuralPartialEq","rustc_middle::query::queries::panic_in_drop_strategy::Value","rustc_middle::query::queries::panic_in_drop_strategy::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()