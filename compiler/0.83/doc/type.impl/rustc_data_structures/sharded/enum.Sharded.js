(function() {
    var type_impls = Object.fromEntries([["rustc_data_structures",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Sharded%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#30-35\">source</a><a href=\"#impl-Default-for-Sharded%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"rustc_data_structures/sharded/enum.Sharded.html\" title=\"enum rustc_data_structures::sharded::Sharded\">Sharded</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#32-34\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_data_structures::sharded::ShardedHashMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sharded%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#37-150\">source</a><a href=\"#impl-Sharded%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"enum\" href=\"rustc_data_structures/sharded/enum.Sharded.html\" title=\"enum rustc_data_structures::sharded::Sharded\">Sharded</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#39-48\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.new\" class=\"fn\">new</a>(value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>() -&gt; T) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_shard_by_value\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#52-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.get_shard_by_value\" class=\"fn\">get_shard_by_value</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(&amp;self, _val: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;K</a>) -&gt; &amp;<a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.Lock.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::Lock\">Lock</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>The shard is selected by hashing <code>val</code> with <code>FxHasher</code>.</p>\n</div></details><section id=\"method.get_shard_by_hash\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.get_shard_by_hash\" class=\"fn\">get_shard_by_hash</a>(&amp;self, hash: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; &amp;<a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.Lock.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::Lock\">Lock</a>&lt;T&gt;</h4></section><section id=\"method.get_shard_by_index\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#66-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.get_shard_by_index\" class=\"fn\">get_shard_by_index</a>(&amp;self, _i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; &amp;<a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.Lock.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::Lock\">Lock</a>&lt;T&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock_shard_by_value\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#80-93\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.lock_shard_by_value\" class=\"fn\">lock_shard_by_value</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    _val: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;K</a>,\n) -&gt; <a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.LockGuard.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::LockGuard\">LockGuard</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>The shard is selected by hashing <code>val</code> with <code>FxHasher</code>.</p>\n</div></details><section id=\"method.lock_shard_by_hash\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#97-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.lock_shard_by_hash\" class=\"fn\">lock_shard_by_hash</a>(&amp;self, hash: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.LockGuard.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::LockGuard\">LockGuard</a>&lt;'_, T&gt;</h4></section><section id=\"method.lock_shard_by_index\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#103-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.lock_shard_by_index\" class=\"fn\">lock_shard_by_index</a>(&amp;self, _i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.LockGuard.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::LockGuard\">LockGuard</a>&lt;'_, T&gt;</h4></section><section id=\"method.lock_shards\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#128-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.lock_shards\" class=\"fn\">lock_shards</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.LockGuard.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::LockGuard\">LockGuard</a>&lt;'_, T&gt;&gt;</h4></section><section id=\"method.try_lock_shards\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_data_structures/sharded.rs.html#140-149\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_data_structures/sharded/enum.Sharded.html#tymethod.try_lock_shards\" class=\"fn\">try_lock_shards</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rustc_data_structures/sync/lock/maybe_sync/struct.LockGuard.html\" title=\"struct rustc_data_structures::sync::lock::maybe_sync::LockGuard\">LockGuard</a>&lt;'_, T&gt;&gt;&gt;</h4></section></div></details>",0,"rustc_data_structures::sharded::ShardedHashMap"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8959]}