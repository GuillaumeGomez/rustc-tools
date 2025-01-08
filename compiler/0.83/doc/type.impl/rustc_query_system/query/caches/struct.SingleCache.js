(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-SingleCache%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#73\">source</a><a href=\"#impl-Default-for-SingleCache%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.SingleCache.html\" title=\"struct rustc_query_system::query::caches::SingleCache\">SingleCache</a>&lt;V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#74\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.SingleCache.html\" title=\"struct rustc_query_system::query::caches::SingleCache\">SingleCache</a>&lt;V&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_middle::query::queries::registered_tools::Storage","rustc_middle::query::queries::early_lint_checks::Storage","rustc_middle::query::queries::resolutions::Storage","rustc_middle::query::queries::resolver_for_lowering_raw::Storage","rustc_middle::query::queries::hir_crate::Storage","rustc_middle::query::queries::hir_crate_items::Storage","rustc_middle::query::queries::analysis::Storage","rustc_middle::query::queries::lint_expectations::Storage","rustc_middle::query::queries::mir_keys::Storage","rustc_middle::query::queries::crate_variances::Storage","rustc_middle::query::queries::inferred_outlives_crate::Storage","rustc_middle::query::queries::check_unused_traits::Storage","rustc_middle::query::queries::live_symbols_and_ignored_derived_traits::Storage","rustc_middle::query::queries::crate_inherent_impls::Storage","rustc_middle::query::queries::crate_inherent_impls_validity_check::Storage","rustc_middle::query::queries::crate_inherent_impls_overlap_check::Storage","rustc_middle::query::queries::effective_visibilities::Storage","rustc_middle::query::queries::check_private_in_public::Storage","rustc_middle::query::queries::reachable_set::Storage","rustc_middle::query::queries::all_local_trait_impls::Storage","rustc_middle::query::queries::dependency_formats::Storage","rustc_middle::query::queries::upstream_monomorphizations::Storage","rustc_middle::query::queries::clashing_extern_declarations::Storage","rustc_middle::query::queries::entry_fn::Storage","rustc_middle::query::queries::proc_macro_decls_static::Storage","rustc_middle::query::queries::get_lang_items::Storage","rustc_middle::query::queries::all_diagnostic_items::Storage","rustc_middle::query::queries::visible_parent_map::Storage","rustc_middle::query::queries::trimmed_def_paths::Storage","rustc_middle::query::queries::postorder_cnums::Storage","rustc_middle::query::queries::allocator_kind::Storage","rustc_middle::query::queries::alloc_error_handler_kind::Storage","rustc_middle::query::queries::maybe_unused_trait_imports::Storage","rustc_middle::query::queries::stability_index::Storage","rustc_middle::query::queries::crates::Storage","rustc_middle::query::queries::used_crates::Storage","rustc_middle::query::queries::collect_and_partition_mono_items::Storage","rustc_middle::query::queries::backend_optimization_level::Storage","rustc_middle::query::queries::output_filenames::Storage","rustc_middle::query::queries::features_query::Storage","rustc_middle::query::queries::crate_for_resolver::Storage","rustc_middle::query::queries::limits::Storage","rustc_middle::query::queries::global_backend_features::Storage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryCache-for-SingleCache%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#79-81\">source</a><a href=\"#impl-QueryCache-for-SingleCache%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"rustc_query_system/query/caches/trait.QueryCache.html\" title=\"trait rustc_query_system::query::caches::QueryCache\">QueryCache</a> for <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.SingleCache.html\" title=\"struct rustc_query_system::query::caches::SingleCache\">SingleCache</a>&lt;V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Key\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#83\">source</a><a href=\"#associatedtype.Key\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#associatedtype.Key\" class=\"associatedtype\">Key</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a></h4></section><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#84\">source</a><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#associatedtype.Value\" class=\"associatedtype\">Value</a> = V</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#87\">source</a><a href=\"#method.lookup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.lookup\" class=\"fn\">lookup</a>(&amp;self, _key: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(V, <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>)&gt;</h4></section></summary><div class='docblock'>Checks if the query is already computed and in the cache.</div></details><section id=\"method.complete\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#92\">source</a><a href=\"#method.complete\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.complete\" class=\"fn\">complete</a>(&amp;self, _key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, value: V, index: <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>)</h4></section><section id=\"method.iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#96\">source</a><a href=\"#method.iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self, f: &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;V</a>, <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>))</h4></section></div></details>","QueryCache","rustc_middle::query::queries::registered_tools::Storage","rustc_middle::query::queries::early_lint_checks::Storage","rustc_middle::query::queries::resolutions::Storage","rustc_middle::query::queries::resolver_for_lowering_raw::Storage","rustc_middle::query::queries::hir_crate::Storage","rustc_middle::query::queries::hir_crate_items::Storage","rustc_middle::query::queries::analysis::Storage","rustc_middle::query::queries::lint_expectations::Storage","rustc_middle::query::queries::mir_keys::Storage","rustc_middle::query::queries::crate_variances::Storage","rustc_middle::query::queries::inferred_outlives_crate::Storage","rustc_middle::query::queries::check_unused_traits::Storage","rustc_middle::query::queries::live_symbols_and_ignored_derived_traits::Storage","rustc_middle::query::queries::crate_inherent_impls::Storage","rustc_middle::query::queries::crate_inherent_impls_validity_check::Storage","rustc_middle::query::queries::crate_inherent_impls_overlap_check::Storage","rustc_middle::query::queries::effective_visibilities::Storage","rustc_middle::query::queries::check_private_in_public::Storage","rustc_middle::query::queries::reachable_set::Storage","rustc_middle::query::queries::all_local_trait_impls::Storage","rustc_middle::query::queries::dependency_formats::Storage","rustc_middle::query::queries::upstream_monomorphizations::Storage","rustc_middle::query::queries::clashing_extern_declarations::Storage","rustc_middle::query::queries::entry_fn::Storage","rustc_middle::query::queries::proc_macro_decls_static::Storage","rustc_middle::query::queries::get_lang_items::Storage","rustc_middle::query::queries::all_diagnostic_items::Storage","rustc_middle::query::queries::visible_parent_map::Storage","rustc_middle::query::queries::trimmed_def_paths::Storage","rustc_middle::query::queries::postorder_cnums::Storage","rustc_middle::query::queries::allocator_kind::Storage","rustc_middle::query::queries::alloc_error_handler_kind::Storage","rustc_middle::query::queries::maybe_unused_trait_imports::Storage","rustc_middle::query::queries::stability_index::Storage","rustc_middle::query::queries::crates::Storage","rustc_middle::query::queries::used_crates::Storage","rustc_middle::query::queries::collect_and_partition_mono_items::Storage","rustc_middle::query::queries::backend_optimization_level::Storage","rustc_middle::query::queries::output_filenames::Storage","rustc_middle::query::queries::features_query::Storage","rustc_middle::query::queries::crate_for_resolver::Storage","rustc_middle::query::queries::limits::Storage","rustc_middle::query::queries::global_backend_features::Storage"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[11049]}