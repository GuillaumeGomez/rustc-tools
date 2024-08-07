(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Clone-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#77-194\">source</a><a href=\"#impl-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.try_to_scalar\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#79-84\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_scalar\" class=\"fn\">try_to_scalar</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustc_middle/mir/interpret/value/enum.Scalar.html\" title=\"enum rustc_middle::mir::interpret::value::Scalar\">Scalar</a>&gt;</h4></section><section id=\"method.try_to_scalar_int\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#86-88\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_scalar_int\" class=\"fn\">try_to_scalar_int</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/consts/int/struct.ScalarInt.html\" title=\"struct rustc_middle::ty::consts::int::ScalarInt\">ScalarInt</a>&gt;</h4></section><section id=\"method.try_to_bits\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#90-92\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_bits\" class=\"fn\">try_to_bits</a>(&amp;self, size: <a class=\"struct\" href=\"rustc_abi/struct.Size.html\" title=\"struct rustc_abi::Size\">Size</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;</h4></section><section id=\"method.try_to_bool\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#94-96\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_bool\" class=\"fn\">try_to_bool</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section><section id=\"method.try_to_target_usize\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#98-100\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_target_usize\" class=\"fn\">try_to_target_usize</a>(&amp;self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;</h4></section><section id=\"method.try_to_bits_for_ty\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#102-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_to_bits_for_ty\" class=\"fn\">try_to_bits_for_ty</a>(\n    &amp;self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n    ty: <a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'tcx&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;</h4></section><section id=\"method.from_bool\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#112-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.from_bool\" class=\"fn\">from_bool</a>(b: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section><section id=\"method.from_u64\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#116-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.from_u64\" class=\"fn\">from_u64</a>(i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; Self</h4></section><section id=\"method.from_u128\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#120-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.from_u128\" class=\"fn\">from_u128</a>(i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>) -&gt; Self</h4></section><section id=\"method.from_target_usize\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#124-126\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.from_target_usize\" class=\"fn\">from_target_usize</a>(i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, cx: &amp;impl <a class=\"trait\" href=\"rustc_abi/trait.HasDataLayout.html\" title=\"trait rustc_abi::HasDataLayout\">HasDataLayout</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_get_slice_bytes_for_diagnostics\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#129-175\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.try_get_slice_bytes_for_diagnostics\" class=\"fn\">try_get_slice_bytes_for_diagnostics</a>(\n    &amp;self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'tcx [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Must only be called on constants of type <code>&amp;str</code> or <code>&amp;[u8]</code>!</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.may_have_provenance\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#179-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/mir/consts/enum.ConstValue.html#tymethod.may_have_provenance\" class=\"fn\">may_have_provenance</a>(&amp;self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, size: <a class=\"struct\" href=\"rustc_abi/struct.Size.html\" title=\"struct rustc_abi::Size\">Size</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Check if a constant may contain provenance information. This is used by MIR opts.\nCan return <code>true</code> even if there is no provenance.</p>\n</div></details></div></details>",0,"rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Debug-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3C__D%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Decodable%3C__D%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, __D: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyDecoder.html\" title=\"trait rustc_middle::ty::TyDecoder\">TyDecoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;__D&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(__decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __D</a>) -&gt; Self</h4></section></div></details>","Decodable<__D>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable%3C__E%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Encodable%3C__E%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, __E: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyEncoder.html\" title=\"trait rustc_middle::ty::TyEncoder\">TyEncoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"rustc_serialize/serialize/trait.Encodable.html\" title=\"trait rustc_serialize::serialize::Encodable\">Encodable</a>&lt;__E&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_serialize/serialize/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self, __encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __E</a>)</h4></section></div></details>","Encodable<__E>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#343-380\">source</a><a href=\"#impl-EraseType-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">24</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Hash-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#33\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, '__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#33\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>,\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Lift%3CTyCtxt%3C'__lifted%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#33\">source</a><a href=\"#impl-Lift%3CTyCtxt%3C'__lifted%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Lifted\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Lifted\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/ty/lift/trait.Lift.html#associatedtype.Lifted\" class=\"associatedtype\">Lifted</a> = <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'__lifted&gt;</h4></section><section id=\"method.lift_to_interner\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#33\">source</a><a href=\"#method.lift_to_interner\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/lift/trait.Lift.html#tymethod.lift_to_interner\" class=\"fn\">lift_to_interner</a>(\n    self,\n    __tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'__lifted&gt;&gt;</h4></section></div></details>","Lift<TyCtxt<'__lifted>>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-PartialEq-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CTyCtxt%3C'tcx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/type_foldable.rs.html#25-28\">source</a><a href=\"#impl-TypeFoldable%3CTyCtxt%3C'tcx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFoldable.html\" title=\"trait rustc_middle::ty::TypeFoldable\">TypeFoldable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/type_foldable.rs.html#25-28\">source</a><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeFoldable.html#tymethod.try_fold_with\" class=\"fn\">try_fold_with</a>&lt;F: <a class=\"trait\" href=\"rustc_middle/ty/trait.FallibleTypeFolder.html\" title=\"trait rustc_middle::ty::FallibleTypeFolder\">FallibleTypeFolder</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt;(\n    self,\n    _: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, F::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.FallibleTypeFolder.html#associatedtype.Error\" title=\"type rustc_middle::ty::FallibleTypeFolder::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>The entry point for folding. To fold a value <code>t</code> with a folder <code>f</code>\ncall: <code>t.try_fold_with(f)</code>. <a href=\"rustc_middle/ty/trait.TypeFoldable.html#tymethod.try_fold_with\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/type_foldable.rs.html#25-28\">source</a><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeFoldable.html#method.fold_with\" class=\"fn\">fold_with</a>&lt;F: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeFolder.html\" title=\"trait rustc_middle::ty::TypeFolder\">TypeFolder</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt;(self, _: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<TyCtxt<'tcx>>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CTyCtxt%3C'tcx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/type_foldable.rs.html#25-28\">source</a><a href=\"#impl-TypeVisitable%3CTyCtxt%3C'tcx%3E%3E-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitable.html\" title=\"trait rustc_middle::ty::TypeVisitable\">TypeVisitable</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/type_foldable.rs.html#25-28\">source</a><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/trait.TypeVisitable.html#tymethod.visit_with\" class=\"fn\">visit_with</a>&lt;F: <a class=\"trait\" href=\"rustc_middle/ty/trait.TypeVisitor.html\" title=\"trait rustc_middle::ty::TypeVisitor\">TypeVisitor</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt;(&amp;self, _: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut F</a>) -&gt; F::<a class=\"associatedtype\" href=\"rustc_middle/ty/trait.TypeVisitor.html#associatedtype.Result\" title=\"type rustc_middle::ty::TypeVisitor::Result\">Result</a></h4></section></summary><div class='docblock'>The entry point for visiting. To visit a value <code>t</code> with a visitor <code>v</code>\ncall: <code>t.visit_with(v)</code>. <a href=\"rustc_middle/ty/trait.TypeVisitable.html#tymethod.visit_with\">Read more</a></div></details></div></details>","TypeVisitable<TyCtxt<'tcx>>","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<section id=\"impl-Copy-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Copy-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section>","Copy","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<section id=\"impl-Eq-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-Eq-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section>","Eq","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"],["<section id=\"impl-StructuralPartialEq-for-ConstValue%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/mir/consts.rs.html#32\">source</a><a href=\"#impl-StructuralPartialEq-for-ConstValue%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;</h3></section>","StructuralPartialEq","rustc_middle::query::queries::valtree_to_const_val::Value","rustc_middle::query::queries::valtree_to_const_val::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()