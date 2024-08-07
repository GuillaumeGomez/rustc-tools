(function() {var type_impls = {
"rustc_data_structures":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#impl-Clone-for-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#impl-Debug-for-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#impl-Default-for-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#177\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CInPlace%3CK,+Vec%3CVarValue%3CK%3E%3E,+()%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#230-232\">source</a><a href=\"#impl-UnificationTable%3CInPlace%3CK,+Vec%3CVarValue%3CK%3E%3E,+()%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;<a class=\"struct\" href=\"rustc_data_structures/unify/struct.InPlace.html\" title=\"struct rustc_data_structures::unify::InPlace\">InPlace</a>&lt;K, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rustc_data_structures/unify/struct.VarValue.html\" title=\"struct rustc_data_structures::unify::VarValue\">VarValue</a>&lt;K&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyKey.html\" title=\"trait rustc_data_structures::unify::UnifyKey\">UnifyKey</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_log\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#236-241\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.with_log\" class=\"fn\">with_log</a>&lt;'a, L&gt;(\n    &amp;'a mut self,\n    undo_log: L,\n) -&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;<a class=\"struct\" href=\"rustc_data_structures/unify/struct.InPlace.html\" title=\"struct rustc_data_structures::unify::InPlace\">InPlace</a>&lt;K, &amp;'a mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rustc_data_structures/unify/struct.VarValue.html\" title=\"struct rustc_data_structures::unify::VarValue\">VarValue</a>&lt;K&gt;&gt;, L&gt;&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"rustc_data_structures/undo_log/trait.UndoLogs.html\" title=\"trait rustc_data_structures::undo_log::UndoLogs\">UndoLogs</a>&lt;<a class=\"enum\" href=\"rustc_data_structures/snapshot_vec/enum.UndoLog.html\" title=\"enum rustc_data_structures::snapshot_vec::UndoLog\">UndoLog</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ena/latest/ena/unify/backing_vec/struct.Delegate.html\" title=\"struct ena::unify::backing_vec::Delegate\">Delegate</a>&lt;K&gt;&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Creates a <code>UnificationTable</code> using an external <code>undo_log</code>, allowing mutating methods to be\ncalled if <code>L</code> does not implement <code>UndoLogs</code></p>\n</div></details></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#256\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#257\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;</h4></section></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#262\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStore.html\" title=\"trait rustc_data_structures::unify::UnificationStore\">UnificationStore</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.snapshot\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#265\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.snapshot\" class=\"fn\">snapshot</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.Snapshot.html\" title=\"struct rustc_data_structures::unify::Snapshot\">Snapshot</a>&lt;S&gt;</h4></section></summary><div class=\"docblock\"><p>Starts a new snapshot. Each snapshot must be either\nrolled back or committed in a “LIFO” (stack) order.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rollback_to\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#274\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.rollback_to\" class=\"fn\">rollback_to</a>(&amp;mut self, snapshot: <a class=\"struct\" href=\"rustc_data_structures/unify/struct.Snapshot.html\" title=\"struct rustc_data_structures::unify::Snapshot\">Snapshot</a>&lt;S&gt;)</h4></section></summary><div class=\"docblock\"><p>Reverses all changes since the last snapshot. Also\nremoves any keys that have been created since then.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#281\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.commit\" class=\"fn\">commit</a>(&amp;mut self, snapshot: <a class=\"struct\" href=\"rustc_data_structures/unify/struct.Snapshot.html\" title=\"struct rustc_data_structures::unify::Snapshot\">Snapshot</a>&lt;S&gt;)</h4></section></summary><div class=\"docblock\"><p>Commits all changes since the last snapshot. Of course, they\ncan still be undone if there is a snapshot further out.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vars_since_snapshot\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#287\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.vars_since_snapshot\" class=\"fn\">vars_since_snapshot</a>(\n    &amp;self,\n    snapshot: &amp;<a class=\"struct\" href=\"rustc_data_structures/unify/struct.Snapshot.html\" title=\"struct rustc_data_structures::unify::Snapshot\">Snapshot</a>&lt;S&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;&lt;S as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html#associatedtype.Key\" title=\"type rustc_data_structures::unify::UnificationStoreBase::Key\">Key</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the keys of all variables created since the <code>snapshot</code>.</p>\n</div></details></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#293\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#295\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of keys created so far.</p>\n</div></details></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#306\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreMut.html\" title=\"trait rustc_data_structures::unify::UnificationStoreMut\">UnificationStoreMut</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_key\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#308\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.new_key\" class=\"fn\">new_key</a>(\n    &amp;mut self,\n    value: &lt;S as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html#associatedtype.Value\" title=\"type rustc_data_structures::unify::UnificationStoreBase::Value\">Value</a>,\n) -&gt; &lt;S as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html#associatedtype.Key\" title=\"type rustc_data_structures::unify::UnificationStoreBase::Key\">Key</a></h4></section></summary><div class=\"docblock\"><p>Creates a fresh key with the given value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reserve\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#318\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.reserve\" class=\"fn\">reserve</a>(&amp;mut self, num_new_keys: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class=\"docblock\"><p>Reserve memory for <code>num_new_keys</code> to be created. Does not\nactually create the new keys; you must then invoke <code>new_key</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset_unifications\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#325\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.reset_unifications\" class=\"fn\">reset_unifications</a>(\n    &amp;mut self,\n    value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&lt;S as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html#associatedtype.Key\" title=\"type rustc_data_structures::unify::UnificationStoreBase::Key\">Key</a>) -&gt; &lt;S as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html#associatedtype.Value\" title=\"type rustc_data_structures::unify::UnificationStoreBase::Value\">Value</a>,\n)</h4></section></summary><div class=\"docblock\"><p>Clears all unifications that have been performed, resetting to\nthe initial state. The values of each variable are given by\nthe closure.</p>\n</div></details></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#449-453\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S, K, V&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreBase.html\" title=\"trait rustc_data_structures::unify::UnificationStoreBase\">UnificationStoreBase</a>&lt;Key = K, Value = V&gt;,\n    K: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyKey.html\" title=\"trait rustc_data_structures::unify::UnifyKey\">UnifyKey</a>&lt;Value = V&gt;,\n    V: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>,</div></h3></section></summary><div class=\"docblock\"><p>////////////////////////////////////////////////////////////////////////\nPublic API</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_probe_value\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#457-460\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.try_probe_value\" class=\"fn\">try_probe_value</a>&lt;'a, K1&gt;(&amp;'a self, id: K1) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a>&gt;<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    K: 'a,</div></h4></section></summary><div class=\"docblock\"><p>Obtains current value for key without any pointer chasing; may return <code>None</code> if key has been union’d.</p>\n</div></details></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UnificationTable%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#471-475\">source</a><a href=\"#impl-UnificationTable%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S, K, V&gt; <a class=\"struct\" href=\"rustc_data_structures/unify/struct.UnificationTable.html\" title=\"struct rustc_data_structures::unify::UnificationTable\">UnificationTable</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnificationStoreMut.html\" title=\"trait rustc_data_structures::unify::UnificationStoreMut\">UnificationStoreMut</a>&lt;Key = K, Value = V&gt;,\n    K: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyKey.html\" title=\"trait rustc_data_structures::unify::UnifyKey\">UnifyKey</a>&lt;Value = V&gt;,\n    V: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#480-484\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.union\" class=\"fn\">union</a>&lt;K1, K2&gt;(&amp;mut self, a_id: K1, b_id: K2)<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    K2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    V: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>&lt;Error = <a class=\"struct\" href=\"rustc_data_structures/unify/struct.NoError.html\" title=\"struct rustc_data_structures::unify::NoError\">NoError</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Unions two keys without the possibility of failure; only\napplicable when unify values use <code>NoError</code> as their error\ntype.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union_value\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#492-495\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.union_value\" class=\"fn\">union_value</a>&lt;K1&gt;(&amp;mut self, id: K1, value: V)<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    V: <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>&lt;Error = <a class=\"struct\" href=\"rustc_data_structures/unify/struct.NoError.html\" title=\"struct rustc_data_structures::unify::NoError\">NoError</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Unions a key and a value without the possibility of failure;\nonly applicable when unify values use <code>NoError</code> as their error\ntype.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unioned\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#501-504\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.unioned\" class=\"fn\">unioned</a>&lt;K1, K2&gt;(&amp;mut self, a_id: K1, b_id: K2) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a><div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    K2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Given two keys, indicates whether they have been unioned together.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.find\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#510-512\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.find\" class=\"fn\">find</a>&lt;K1&gt;(&amp;mut self, id: K1) -&gt; K<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Given a key, returns the (current) root key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unify_var_var\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#521-524\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.unify_var_var\" class=\"fn\">unify_var_var</a>&lt;K1, K2&gt;(\n    &amp;mut self,\n    a_id: K1,\n    b_id: K2,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;V as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnifyValue.html#associatedtype.Error\" title=\"type rustc_data_structures::unify::UnifyValue::Error\">Error</a>&gt;<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,\n    K2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Unions together two variables, merging their values. If\nmerging the values fails, the error is propagated and this\nmethod has no effect.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unify_var_value\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#543-545\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.unify_var_value\" class=\"fn\">unify_var_value</a>&lt;K1&gt;(\n    &amp;mut self,\n    a_id: K1,\n    b: V,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, &lt;V as <a class=\"trait\" href=\"rustc_data_structures/unify/trait.UnifyValue.html\" title=\"trait rustc_data_structures::unify::UnifyValue\">UnifyValue</a>&gt;::<a class=\"associatedtype\" href=\"rustc_data_structures/unify/trait.UnifyValue.html#associatedtype.Error\" title=\"type rustc_data_structures::unify::UnifyValue::Error\">Error</a>&gt;<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Sets the value of the key <code>a_id</code> to <code>b</code>, attempting to merge\nwith the previous value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.probe_value\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#556-558\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.probe_value\" class=\"fn\">probe_value</a>&lt;K1&gt;(&amp;mut self, id: K1) -&gt; V<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the current value for the given key. If the key has\nbeen union’d, this will give the value from the current root.</p>\n</div></details><section id=\"method.inlined_probe_value\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/ena/latest/src/ena/unify/mod.rs.html#565-567\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/unify/struct.UnificationTable.html#tymethod.inlined_probe_value\" class=\"fn\">inlined_probe_value</a>&lt;K1&gt;(&amp;mut self, id: K1) -&gt; V<div class=\"where\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;K&gt;,</div></h4></section></div></details>",0,"rustc_data_structures::unify::UnificationTableStorage","rustc_data_structures::unify::InPlaceUnificationTable"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()