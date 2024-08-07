(function() {var type_impls = {
"rustc_data_structures":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#16\">source</a><a href=\"#impl-Clone-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#16\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#24-32\">source</a><a href=\"#impl-Default-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, M, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#29-31\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index%3C%26K%3E-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#105-114\">source</a><a href=\"#impl-Index%3C%26K%3E-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'k, K, V, M, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'k K</a>&gt; for <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"type\" href=\"rustc_data_structures/fx/type.FxHashMap.html\" title=\"type rustc_data_structures::fx::FxHashMap\">FxHashMap</a>&lt;K, V&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = V</h4></section></summary><div class='docblock'>The returned type after indexing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#111-113\">source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#tymethod.index\" class=\"fn\">index</a>(&amp;self, key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'k K</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;V</a></h4></section></summary><div class='docblock'>Performs the indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#tymethod.index\">Read more</a></div></details></div></details>","Index<&'k K>","rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rollback%3CUndoLog%3CK,+V%3E%3E-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#116-124\">source</a><a href=\"#impl-Rollback%3CUndoLog%3CK,+V%3E%3E-for-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, M, L&gt; <a class=\"trait\" href=\"rustc_data_structures/undo_log/trait.Rollback.html\" title=\"trait rustc_data_structures::undo_log::Rollback\">Rollback</a>&lt;<a class=\"enum\" href=\"rustc_data_structures/snapshot_map/enum.UndoLog.html\" title=\"enum rustc_data_structures::snapshot_map::UndoLog\">UndoLog</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    M: <a class=\"trait\" href=\"rustc_data_structures/undo_log/trait.Rollback.html\" title=\"trait rustc_data_structures::undo_log::Rollback\">Rollback</a>&lt;<a class=\"enum\" href=\"rustc_data_structures/snapshot_map/enum.UndoLog.html\" title=\"enum rustc_data_structures::snapshot_map::UndoLog\">UndoLog</a>&lt;K, V&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.reverse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#121-123\">source</a><a href=\"#method.reverse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_data_structures/undo_log/trait.Rollback.html#tymethod.reverse\" class=\"fn\">reverse</a>(&amp;mut self, undo: <a class=\"enum\" href=\"rustc_data_structures/snapshot_map/enum.UndoLog.html\" title=\"enum rustc_data_structures::snapshot_map::UndoLog\">UndoLog</a>&lt;K, V&gt;)</h4></section></div></details>","Rollback<UndoLog<K, V>>","rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#41-46\">source</a><a href=\"#impl-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, M, L&gt; <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.with_log\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#43-45\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html#tymethod.with_log\" class=\"fn\">with_log</a>&lt;L2&gt;(&amp;mut self, undo_log: L2) -&gt; <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut M</a>, L2&gt;</h4></section></div></details>",0,"rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#48-85\">source</a><a href=\"#impl-SnapshotMap%3CK,+V,+M,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, M, L&gt; <a class=\"struct\" href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html\" title=\"struct rustc_data_structures::snapshot_map::SnapshotMap\">SnapshotMap</a>&lt;K, V, M, L&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;<a class=\"type\" href=\"rustc_data_structures/fx/type.FxHashMap.html\" title=\"type rustc_data_structures::fx::FxHashMap\">FxHashMap</a>&lt;K, V&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"type\" href=\"rustc_data_structures/fx/type.FxHashMap.html\" title=\"type rustc_data_structures::fx::FxHashMap\">FxHashMap</a>&lt;K, V&gt;&gt;,\n    L: <a class=\"trait\" href=\"rustc_data_structures/undo_log/trait.UndoLogs.html\" title=\"trait rustc_data_structures::undo_log::UndoLogs\">UndoLogs</a>&lt;<a class=\"enum\" href=\"rustc_data_structures/snapshot_map/enum.UndoLog.html\" title=\"enum rustc_data_structures::snapshot_map::UndoLog\">UndoLog</a>&lt;K, V&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#54-57\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;mut self)</h4></section><section id=\"method.insert\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#59-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;mut self, key: K, value: V) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.remove\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#72-80\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, key: K) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/snapshot_map/mod.rs.html#82-84\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/snapshot_map/struct.SnapshotMap.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;K</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;V</a>&gt;</h4></section></div></details>",0,"rustc_data_structures::snapshot_map::SnapshotMapStorage","rustc_data_structures::snapshot_map::SnapshotMapRef"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()