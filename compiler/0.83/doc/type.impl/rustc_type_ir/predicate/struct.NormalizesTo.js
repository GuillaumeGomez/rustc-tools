(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#impl-Clone-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#699\">source</a><a href=\"#impl-Debug-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#700\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __D&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    __D: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyDecoder.html\" title=\"trait rustc_middle::ty::TyDecoder\">TyDecoder</a>&lt;I = I&gt;,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;</h4></section></div></details>","Decodable<__D>","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/ir_print.rs.html#47-59\">source</a><a href=\"#impl-Display-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/ir_print.rs.html#47-59\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __E&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    __E: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyEncoder.html\" title=\"trait rustc_middle::ty::TyEncoder\">TyEncoder</a>&lt;I = I&gt;,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#impl-Hash-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, __state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#235-237\">source</a><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3C__CTX%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#impl-HashStable%3C__CTX%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, __CTX&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;__CTX&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#675\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CTX</a>,\n    __hasher: &amp;mut <a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/stable_hasher/struct.StableHasher.html\" title=\"struct rustc_stable_hash::stable_hasher::StableHasher\">StableHasher</a>&lt;<a class=\"struct\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/sip128/struct.SipHasher128.html\" title=\"struct rustc_stable_hash::sip128::SipHasher128\">SipHasher128</a>&gt;,\n)</h4></section></div></details>","HashStable<__CTX>","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Lift%3CJ%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#impl-Lift%3CJ%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, J&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;J&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    J: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;J, Lifted = <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;J&gt;&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;J, Lifted = &lt;J as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Lifted\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#associatedtype.Lifted\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/ty/lift/trait.Lift.html#associatedtype.Lifted\" class=\"associatedtype\">Lifted</a> = <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;J&gt;</h4></section><section id=\"method.lift_to_interner\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#method.lift_to_interner\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/lift/trait.Lift.html#tymethod.lift_to_interner\" class=\"fn\">lift_to_interner</a>(self, interner: J) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;J&gt;&gt;</h4></section></div></details>","Lift<J>","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#681\">source</a><a href=\"#impl-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.self_ty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#682\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_type_ir/predicate/struct.NormalizesTo.html#tymethod.self_ty\" class=\"fn\">self_ty</a>(self) -&gt; &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Ty\" title=\"type rustc_middle::ty::Interner::Ty\">Ty</a></h4></section><section id=\"method.with_self_ty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#686\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_type_ir/predicate/struct.NormalizesTo.html#tymethod.with_self_ty\" class=\"fn\">with_self_ty</a>(\n    self,\n    interner: I,\n    self_ty: &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Ty\" title=\"type rustc_middle::ty::Interner::Ty\">Ty</a>,\n) -&gt; <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;</h4></section><section id=\"method.trait_def_id\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#690\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_type_ir/predicate/struct.NormalizesTo.html#tymethod.trait_def_id\" class=\"fn\">trait_def_id</a>(self, interner: I) -&gt; &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.DefId\" title=\"type rustc_middle::ty::Interner::DefId\">DefId</a></h4></section><section id=\"method.def_id\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#694\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_type_ir/predicate/struct.NormalizesTo.html#tymethod.def_id\" class=\"fn\">def_id</a>(self) -&gt; &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.DefId\" title=\"type rustc_middle::ty::Interner::DefId\">DefId</a></h4></section></div></details>",0,"rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#impl-PartialEq-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, __other: &amp;<a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CI%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#impl-TypeFoldable%3CI%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFoldable.html\" title=\"trait rustc_middle::ty::TypeFoldable\">TypeFoldable</a>&lt;I&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFoldable.html\" title=\"trait rustc_middle::ty::TypeFoldable\">TypeFoldable</a>&lt;I&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFoldable.html\" title=\"trait rustc_middle::ty::TypeFoldable\">TypeFoldable</a>&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeFoldable.html#tymethod.try_fold_with\" class=\"fn\">try_fold_with</a>&lt;__F&gt;(\n    self,\n    __folder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __F</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;, &lt;__F as <a class=\"trait\" href=\"rustc_middle/ty/trait.FallibleTypeFolder.html\" title=\"trait rustc_middle::ty::FallibleTypeFolder\">FallibleTypeFolder</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.FallibleTypeFolder.html#associatedtype.Error\" title=\"type rustc_middle::ty::FallibleTypeFolder::Error\">Error</a>&gt;<div class=\"where\">where\n    __F: <a class=\"trait\" href=\"rustc_middle/ty/trait.FallibleTypeFolder.html\" title=\"trait rustc_middle::ty::FallibleTypeFolder\">FallibleTypeFolder</a>&lt;I&gt;,</div></h4></section></summary><div class='docblock'>The entry point for folding. To fold a value <code>t</code> with a folder <code>f</code>\ncall: <code>t.try_fold_with(f)</code>. <a href=\"rustc_middle/ty/trait.TypeFoldable.html#tymethod.try_fold_with\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/fold.rs.html#91\">source</a><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeFoldable.html#method.fold_with\" class=\"fn\">fold_with</a>&lt;F&gt;(self, folder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>) -&gt; Self<div class=\"where\">where\n    F: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFolder.html\" title=\"trait rustc_middle::ty::TypeFolder\">TypeFolder</a>&lt;I&gt;,</div></h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<I>","rustc_middle::ty::predicate::NormalizesTo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CI%3E-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#impl-TypeVisitable%3CI%3E-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitable.html\" title=\"trait rustc_middle::ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt; for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,\n    <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.AliasTerm.html\" title=\"struct rustc_type_ir::predicate::AliasTerm\">AliasTerm</a>&lt;I&gt;: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitable.html\" title=\"trait rustc_middle::ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt;,\n    &lt;I as <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.Interner.html#associatedtype.Term\" title=\"type rustc_middle::ty::Interner::Term\">Term</a>: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitable.html\" title=\"trait rustc_middle::ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#674\">source</a><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeVisitable.html#tymethod.visit_with\" class=\"fn\">visit_with</a>&lt;__V&gt;(\n    &amp;self,\n    __visitor: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __V</a>,\n) -&gt; &lt;__V as <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitor.html\" title=\"trait rustc_middle::ty::TypeVisitor\">TypeVisitor</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.TypeVisitor.html#associatedtype.Result\" title=\"type rustc_middle::ty::TypeVisitor::Result\">Result</a><div class=\"where\">where\n    __V: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitor.html\" title=\"trait rustc_middle::ty::TypeVisitor\">TypeVisitor</a>&lt;I&gt;,</div></h4></section></summary><div class='docblock'>The entry point for visiting. To visit a value <code>t</code> with a visitor <code>v</code>\ncall: <code>t.visit_with(v)</code>. <a href=\"rustc_middle/ty/trait.TypeVisitable.html#tymethod.visit_with\">Read more</a></div></details></div></details>","TypeVisitable<I>","rustc_middle::ty::predicate::NormalizesTo"],["<section id=\"impl-Copy-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#impl-Copy-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section>","Copy","rustc_middle::ty::predicate::NormalizesTo"],["<section id=\"impl-Eq-for-NormalizesTo%3CI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_type_ir/predicate.rs.html#673\">source</a><a href=\"#impl-Eq-for-NormalizesTo%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"rustc_type_ir/predicate/struct.NormalizesTo.html\" title=\"struct rustc_type_ir::predicate::NormalizesTo\">NormalizesTo</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"rustc_middle/ty/trait.Interner.html\" title=\"trait rustc_middle::ty::Interner\">Interner</a>,</div></h3></section>","Eq","rustc_middle::ty::predicate::NormalizesTo"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[35426]}