(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-Clone-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-Debug-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#343-380\">source</a><a href=\"#impl-EraseType-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]</h4></section></div></details>","EraseType","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-HashStable%3CStableHashingContext%3C'__ctx%3E%3E-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, '__ctx&gt; <a class=\"trait\" href=\"rustc_data_structures/stable_hasher/trait.HashStable.html\" title=\"trait rustc_data_structures::stable_hasher::HashStable\">HashStable</a>&lt;<a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.hash_stable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#method.hash_stable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/stable_hasher/trait.HashStable.html#tymethod.hash_stable\" class=\"fn\">hash_stable</a>(\n    &amp;self,\n    __hcx: &amp;mut <a class=\"struct\" href=\"rustc_query_system/ich/hcx/struct.StableHashingContext.html\" title=\"struct rustc_query_system::ich::hcx::StableHashingContext\">StableHashingContext</a>&lt;'__ctx&gt;,\n    __hasher: &amp;mut <a class=\"type\" href=\"https://docs.rs/rustc-stable-hash/0.1.0/rustc_stable_hash/hashers/type.StableSipHasher128.html\" title=\"type rustc_stable_hash::hashers::StableSipHasher128\">StableHasher</a>,\n)</h4></section></div></details>","HashStable<StableHashingContext<'__ctx>>","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#36-261\">source</a><a href=\"#impl-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#38-40\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.apply\" class=\"fn\">apply</a>(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n    module_def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if the corresponding type is inhabited in the given <code>ParamEnv</code> and module.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_revealing_opaque\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#44-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.apply_revealing_opaque\" class=\"fn\">apply_revealing_opaque</a>(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n    module_def_id: <a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>,\n    reveal_opaque: &amp;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"type\" href=\"rustc_middle/ty/opaque_types/type.OpaqueTypeKey.html\" title=\"type rustc_middle::ty::opaque_types::OpaqueTypeKey\">OpaqueTypeKey</a>&lt;'tcx&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'tcx&gt;&gt;,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if the corresponding type is inhabited in the given <code>ParamEnv</code> and module,\nrevealing opaques when possible.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_any_module\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#62-64\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.apply_any_module\" class=\"fn\">apply_any_module</a>(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Same as <code>apply</code>, but returns <code>None</code> if self contains a module predicate</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_ignore_module\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#68-74\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.apply_ignore_module\" class=\"fn\">apply_ignore_module</a>(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Same as <code>apply</code>, but <code>NotInModule(_)</code> predicates yield <code>false</code>. That is,\nprivately uninhabited types are considered always uninhabited.</p>\n</div></details><section id=\"method.apply_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#76\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.apply_inner\" class=\"fn\">apply_inner</a>&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt;(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    param_env: <a class=\"struct\" href=\"rustc_middle/ty/struct.ParamEnv.html\" title=\"struct rustc_middle::ty::ParamEnv\">ParamEnv</a>&lt;'tcx&gt;,\n    eval_stack: &amp;mut <a class=\"struct\" href=\"https://docs.rs/smallvec/1.13.2/smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;[<a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'tcx&gt;; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;,\n    in_module: &amp;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, E&gt;,\n    reveal_opaque: &amp;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"type\" href=\"rustc_middle/ty/opaque_types/type.OpaqueTypeKey.html\" title=\"type rustc_middle::ty::opaque_types::OpaqueTypeKey\">OpaqueTypeKey</a>&lt;'tcx&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'tcx&gt;&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, E&gt;</h4></section><section id=\"method.and\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#147-149\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.and\" class=\"fn\">and</a>(self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, other: Self) -&gt; Self</h4></section><section id=\"method.or\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#151-153\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.or\" class=\"fn\">or</a>(self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, other: Self) -&gt; Self</h4></section><section id=\"method.all\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#155-164\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.all\" class=\"fn\">all</a>(tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, iter: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = Self&gt;) -&gt; Self</h4></section><section id=\"method.any\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#166-175\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.any\" class=\"fn\">any</a>(tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, iter: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = Self&gt;) -&gt; Self</h4></section><section id=\"method.reduce_and\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#177-201\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.reduce_and\" class=\"fn\">reduce_and</a>(self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, other: Self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section><section id=\"method.reduce_or\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#203-227\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.reduce_or\" class=\"fn\">reduce_or</a>(self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, other: Self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#230-232\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.instantiate\" class=\"fn\">instantiate</a>(self, tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;, args: <a class=\"type\" href=\"rustc_middle/ty/generic_args/type.GenericArgsRef.html\" title=\"type rustc_middle::ty::generic_args::GenericArgsRef\">GenericArgsRef</a>&lt;'tcx&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Replaces generic types with its corresponding predicate</p>\n</div></details><section id=\"method.instantiate_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#234-260\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html#tymethod.instantiate_opt\" class=\"fn\">instantiate_opt</a>(\n    self,\n    tcx: <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;,\n    args: <a class=\"type\" href=\"rustc_middle/ty/generic_args/type.GenericArgsRef.html\" title=\"type rustc_middle::ty::generic_args::GenericArgsRef\">GenericArgsRef</a>&lt;'tcx&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></div></details>",0,"rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-PartialEq-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<section id=\"impl-Copy-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-Copy-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section>","Copy","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"],["<section id=\"impl-StructuralPartialEq-for-InhabitedPredicate%3C'tcx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/inhabitedness/inhabited_predicate.rs.html#13\">source</a><a href=\"#impl-StructuralPartialEq-for-InhabitedPredicate%3C'tcx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"rustc_middle/ty/inhabitedness/inhabited_predicate/enum.InhabitedPredicate.html\" title=\"enum rustc_middle::ty::inhabitedness::inhabited_predicate::InhabitedPredicate\">InhabitedPredicate</a>&lt;'tcx&gt;</h3></section>","StructuralPartialEq","rustc_middle::query::queries::inhabited_predicate_adt::Value","rustc_middle::query::queries::inhabited_predicate_adt::ProvidedValue","rustc_middle::query::queries::inhabited_predicate_type::Value","rustc_middle::query::queries::inhabited_predicate_type::ProvidedValue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()