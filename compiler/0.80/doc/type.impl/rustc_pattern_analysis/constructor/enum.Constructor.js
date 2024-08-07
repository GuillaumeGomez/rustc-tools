(function() {var type_impls = {
"rustc_pattern_analysis":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Constructor%3CCx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#730-755\">source</a><a href=\"#impl-Clone-for-Constructor%3CCx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cx: <a class=\"trait\" href=\"rustc_pattern_analysis/trait.PatCx.html\" title=\"trait rustc_pattern_analysis::PatCx\">PatCx</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.Constructor.html\" title=\"enum rustc_pattern_analysis::constructor::Constructor\">Constructor</a>&lt;Cx&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#731-754\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_pattern_analysis::rustc::Constructor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Constructor%3CCx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#757-950\">source</a><a href=\"#impl-Constructor%3CCx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cx: <a class=\"trait\" href=\"rustc_pattern_analysis/trait.PatCx.html\" title=\"trait rustc_pattern_analysis::PatCx\">PatCx</a>&gt; <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.Constructor.html\" title=\"enum rustc_pattern_analysis::constructor::Constructor\">Constructor</a>&lt;Cx&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.is_non_exhaustive\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#758-760\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.is_non_exhaustive\" class=\"fn\">is_non_exhaustive</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.as_variant\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#762-767\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.as_variant\" class=\"fn\">as_variant</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.VariantIdx\" title=\"type rustc_pattern_analysis::PatCx::VariantIdx\">VariantIdx</a>&gt;</h4></section><section id=\"method.as_bool\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#768-773\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.as_bool\" class=\"fn\">as_bool</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;</h4></section><section id=\"method.as_int_range\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#774-779\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.as_int_range\" class=\"fn\">as_int_range</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"rustc_pattern_analysis/constructor/struct.IntRange.html\" title=\"struct rustc_pattern_analysis::constructor::IntRange\">IntRange</a>&gt;</h4></section><section id=\"method.as_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#780-785\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.as_slice\" class=\"fn\">as_slice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_pattern_analysis/constructor/struct.Slice.html\" title=\"struct rustc_pattern_analysis::constructor::Slice\">Slice</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.arity\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#789-791\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.arity\" class=\"fn\">arity</a>(&amp;self, cx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Cx</a>, ty: &amp;Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.Ty\" title=\"type rustc_pattern_analysis::PatCx::Ty\">Ty</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>The number of fields for this constructor. This must be kept in sync with\n<code>Fields::wildcards</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_covered_by\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#798-872\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.is_covered_by\" class=\"fn\">is_covered_by</a>(\n    &amp;self,\n    cx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Cx</a>,\n    other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.Error\" title=\"type rustc_pattern_analysis::PatCx::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns whether <code>self</code> is covered by <code>other</code>, i.e. whether <code>self</code> is a subset of <code>other</code>.\nFor the simple cases, this is simply checking for equality. For the “grouped” constructors,\nthis checks for inclusion.</p>\n</div></details><section id=\"method.fmt_fields\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#874-949\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"rustc_pattern_analysis/constructor/enum.Constructor.html#tymethod.fmt_fields\" class=\"fn\">fmt_fields</a>(\n    &amp;self,\n    f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;,\n    ty: &amp;Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.Ty\" title=\"type rustc_pattern_analysis::PatCx::Ty\">Ty</a>,\n    fields: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt;,\n) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></div></details>",0,"rustc_pattern_analysis::rustc::Constructor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Constructor%3CCx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#678\">source</a><a href=\"#impl-Debug-for-Constructor%3CCx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Cx: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"rustc_pattern_analysis/trait.PatCx.html\" title=\"trait rustc_pattern_analysis::PatCx\">PatCx</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"rustc_pattern_analysis/constructor/enum.Constructor.html\" title=\"enum rustc_pattern_analysis::constructor::Constructor\">Constructor</a>&lt;Cx&gt;<div class=\"where\">where\n    Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.VariantIdx\" title=\"type rustc_pattern_analysis::PatCx::VariantIdx\">VariantIdx</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Cx::<a class=\"associatedtype\" href=\"rustc_pattern_analysis/trait.PatCx.html#associatedtype.StrLit\" title=\"type rustc_pattern_analysis::PatCx::StrLit\">StrLit</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_pattern_analysis/constructor.rs.html#678\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_pattern_analysis::rustc::Constructor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()