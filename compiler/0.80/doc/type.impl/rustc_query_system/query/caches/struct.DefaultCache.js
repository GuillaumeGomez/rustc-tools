(function() {var type_impls = {
"rustc_middle":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DefaultCache%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#29\">source</a><a href=\"#impl-Default-for-DefaultCache%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.DefaultCache.html\" title=\"struct rustc_query_system::query::caches::DefaultCache\">DefaultCache</a>&lt;K, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#30\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.DefaultCache.html\" title=\"struct rustc_query_system::query::caches::DefaultCache\">DefaultCache</a>&lt;K, V&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rustc_middle::query::queries::hir_module_items::Storage","rustc_middle::query::queries::check_expectations::Storage","rustc_middle::query::queries::representability_adt_ty::Storage","rustc_middle::query::queries::coverage_ids_info::Storage","rustc_middle::query::queries::erase_regions_ty::Storage","rustc_middle::query::queries::explicit_supertraits_containing_assoc_item::Storage","rustc_middle::query::queries::type_param_predicates::Storage","rustc_middle::query::queries::incoherent_impls::Storage","rustc_middle::query::queries::lint_mod::Storage","rustc_middle::query::queries::check_mod_attrs::Storage","rustc_middle::query::queries::check_mod_unstable_api_usage::Storage","rustc_middle::query::queries::check_mod_const_bodies::Storage","rustc_middle::query::queries::check_mod_loops::Storage","rustc_middle::query::queries::check_mod_naked_functions::Storage","rustc_middle::query::queries::check_mod_privacy::Storage","rustc_middle::query::queries::check_mod_deathness::Storage","rustc_middle::query::queries::check_mod_type_wf::Storage","rustc_middle::query::queries::mir_callgraph_reachable::Storage","rustc_middle::query::queries::mir_inliner_callees::Storage","rustc_middle::query::queries::tag_for_variant::Storage","rustc_middle::query::queries::eval_to_allocation_raw::Storage","rustc_middle::query::queries::eval_to_const_value_raw::Storage","rustc_middle::query::queries::eval_to_valtree::Storage","rustc_middle::query::queries::valtree_to_const_val::Storage","rustc_middle::query::queries::destructure_const::Storage","rustc_middle::query::queries::lit_to_const::Storage","rustc_middle::query::queries::mir_shims::Storage","rustc_middle::query::queries::symbol_name::Storage","rustc_middle::query::queries::vtable_entries::Storage","rustc_middle::query::queries::first_method_vtable_slot::Storage","rustc_middle::query::queries::supertrait_vtable_slot::Storage","rustc_middle::query::queries::vtable_allocation::Storage","rustc_middle::query::queries::codegen_select_candidate::Storage","rustc_middle::query::queries::is_copy_raw::Storage","rustc_middle::query::queries::is_sized_raw::Storage","rustc_middle::query::queries::is_freeze_raw::Storage","rustc_middle::query::queries::is_unpin_raw::Storage","rustc_middle::query::queries::needs_drop_raw::Storage","rustc_middle::query::queries::needs_async_drop_raw::Storage","rustc_middle::query::queries::has_significant_drop_raw::Storage","rustc_middle::query::queries::has_structural_eq_impl::Storage","rustc_middle::query::queries::layout_of::Storage","rustc_middle::query::queries::fn_abi_of_fn_ptr::Storage","rustc_middle::query::queries::fn_abi_of_instance::Storage","rustc_middle::query::queries::specializes::Storage","rustc_middle::query::queries::upstream_drop_glue_for::Storage","rustc_middle::query::queries::upstream_async_drop_glue_for::Storage","rustc_middle::query::queries::implementations_of_trait::Storage","rustc_middle::query::queries::crate_incoherent_impls::Storage","rustc_middle::query::queries::inhabited_predicate_type::Storage","rustc_middle::query::queries::codegen_unit::Storage","rustc_middle::query::queries::unused_generic_params::Storage","rustc_middle::query::queries::normalize_canonicalized_projection_ty::Storage","rustc_middle::query::queries::normalize_canonicalized_weak_ty::Storage","rustc_middle::query::queries::normalize_canonicalized_inherent_projection_ty::Storage","rustc_middle::query::queries::try_normalize_generic_arg_after_erasing_regions::Storage","rustc_middle::query::queries::implied_outlives_bounds_compat::Storage","rustc_middle::query::queries::implied_outlives_bounds::Storage","rustc_middle::query::queries::dropck_outlives::Storage","rustc_middle::query::queries::evaluate_obligation::Storage","rustc_middle::query::queries::type_op_ascribe_user_type::Storage","rustc_middle::query::queries::type_op_eq::Storage","rustc_middle::query::queries::type_op_subtype::Storage","rustc_middle::query::queries::type_op_prove_predicate::Storage","rustc_middle::query::queries::type_op_normalize_ty::Storage","rustc_middle::query::queries::type_op_normalize_clause::Storage","rustc_middle::query::queries::type_op_normalize_poly_fn_sig::Storage","rustc_middle::query::queries::type_op_normalize_fn_sig::Storage","rustc_middle::query::queries::instantiate_and_check_impossible_predicates::Storage","rustc_middle::query::queries::is_impossible_associated_item::Storage","rustc_middle::query::queries::method_autoderef_steps::Storage","rustc_middle::query::queries::resolve_instance_raw::Storage","rustc_middle::query::queries::reveal_opaque_types_in_bounds::Storage","rustc_middle::query::queries::diagnostic_hir_wf_check::Storage","rustc_middle::query::queries::check_validity_requirement::Storage","rustc_middle::query::queries::compare_impl_const::Storage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QueryCache-for-DefaultCache%3CK,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#35-38\">source</a><a href=\"#impl-QueryCache-for-DefaultCache%3CK,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V&gt; <a class=\"trait\" href=\"rustc_query_system/query/caches/trait.QueryCache.html\" title=\"trait rustc_query_system::query::caches::QueryCache\">QueryCache</a> for <a class=\"struct\" href=\"rustc_query_system/query/caches/struct.DefaultCache.html\" title=\"struct rustc_query_system::query::caches::DefaultCache\">DefaultCache</a>&lt;K, V&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Key\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Key\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#associatedtype.Key\" class=\"associatedtype\">Key</a> = K</h4></section><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#associatedtype.Value\" class=\"associatedtype\">Value</a> = V</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#44\">source</a><a href=\"#method.lookup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.lookup\" class=\"fn\">lookup</a>(&amp;self, key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;K</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(V, <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>)&gt;</h4></section></summary><div class='docblock'>Checks if the query is already computed and in the cache.</div></details><section id=\"method.complete\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#53\">source</a><a href=\"#method.complete\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.complete\" class=\"fn\">complete</a>(&amp;self, key: K, value: V, index: <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>)</h4></section><section id=\"method.iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_query_system/query/caches.rs.html#60\">source</a><a href=\"#method.iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustc_query_system/query/caches/trait.QueryCache.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self, f: &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;K</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;V</a>, <a class=\"struct\" href=\"rustc_middle/dep_graph/struct.DepNodeIndex.html\" title=\"struct rustc_middle::dep_graph::DepNodeIndex\">DepNodeIndex</a>))</h4></section></div></details>","QueryCache","rustc_middle::query::queries::hir_module_items::Storage","rustc_middle::query::queries::check_expectations::Storage","rustc_middle::query::queries::representability_adt_ty::Storage","rustc_middle::query::queries::coverage_ids_info::Storage","rustc_middle::query::queries::erase_regions_ty::Storage","rustc_middle::query::queries::explicit_supertraits_containing_assoc_item::Storage","rustc_middle::query::queries::type_param_predicates::Storage","rustc_middle::query::queries::incoherent_impls::Storage","rustc_middle::query::queries::lint_mod::Storage","rustc_middle::query::queries::check_mod_attrs::Storage","rustc_middle::query::queries::check_mod_unstable_api_usage::Storage","rustc_middle::query::queries::check_mod_const_bodies::Storage","rustc_middle::query::queries::check_mod_loops::Storage","rustc_middle::query::queries::check_mod_naked_functions::Storage","rustc_middle::query::queries::check_mod_privacy::Storage","rustc_middle::query::queries::check_mod_deathness::Storage","rustc_middle::query::queries::check_mod_type_wf::Storage","rustc_middle::query::queries::mir_callgraph_reachable::Storage","rustc_middle::query::queries::mir_inliner_callees::Storage","rustc_middle::query::queries::tag_for_variant::Storage","rustc_middle::query::queries::eval_to_allocation_raw::Storage","rustc_middle::query::queries::eval_to_const_value_raw::Storage","rustc_middle::query::queries::eval_to_valtree::Storage","rustc_middle::query::queries::valtree_to_const_val::Storage","rustc_middle::query::queries::destructure_const::Storage","rustc_middle::query::queries::lit_to_const::Storage","rustc_middle::query::queries::mir_shims::Storage","rustc_middle::query::queries::symbol_name::Storage","rustc_middle::query::queries::vtable_entries::Storage","rustc_middle::query::queries::first_method_vtable_slot::Storage","rustc_middle::query::queries::supertrait_vtable_slot::Storage","rustc_middle::query::queries::vtable_allocation::Storage","rustc_middle::query::queries::codegen_select_candidate::Storage","rustc_middle::query::queries::is_copy_raw::Storage","rustc_middle::query::queries::is_sized_raw::Storage","rustc_middle::query::queries::is_freeze_raw::Storage","rustc_middle::query::queries::is_unpin_raw::Storage","rustc_middle::query::queries::needs_drop_raw::Storage","rustc_middle::query::queries::needs_async_drop_raw::Storage","rustc_middle::query::queries::has_significant_drop_raw::Storage","rustc_middle::query::queries::has_structural_eq_impl::Storage","rustc_middle::query::queries::layout_of::Storage","rustc_middle::query::queries::fn_abi_of_fn_ptr::Storage","rustc_middle::query::queries::fn_abi_of_instance::Storage","rustc_middle::query::queries::specializes::Storage","rustc_middle::query::queries::upstream_drop_glue_for::Storage","rustc_middle::query::queries::upstream_async_drop_glue_for::Storage","rustc_middle::query::queries::implementations_of_trait::Storage","rustc_middle::query::queries::crate_incoherent_impls::Storage","rustc_middle::query::queries::inhabited_predicate_type::Storage","rustc_middle::query::queries::codegen_unit::Storage","rustc_middle::query::queries::unused_generic_params::Storage","rustc_middle::query::queries::normalize_canonicalized_projection_ty::Storage","rustc_middle::query::queries::normalize_canonicalized_weak_ty::Storage","rustc_middle::query::queries::normalize_canonicalized_inherent_projection_ty::Storage","rustc_middle::query::queries::try_normalize_generic_arg_after_erasing_regions::Storage","rustc_middle::query::queries::implied_outlives_bounds_compat::Storage","rustc_middle::query::queries::implied_outlives_bounds::Storage","rustc_middle::query::queries::dropck_outlives::Storage","rustc_middle::query::queries::evaluate_obligation::Storage","rustc_middle::query::queries::type_op_ascribe_user_type::Storage","rustc_middle::query::queries::type_op_eq::Storage","rustc_middle::query::queries::type_op_subtype::Storage","rustc_middle::query::queries::type_op_prove_predicate::Storage","rustc_middle::query::queries::type_op_normalize_ty::Storage","rustc_middle::query::queries::type_op_normalize_clause::Storage","rustc_middle::query::queries::type_op_normalize_poly_fn_sig::Storage","rustc_middle::query::queries::type_op_normalize_fn_sig::Storage","rustc_middle::query::queries::instantiate_and_check_impossible_predicates::Storage","rustc_middle::query::queries::is_impossible_associated_item::Storage","rustc_middle::query::queries::method_autoderef_steps::Storage","rustc_middle::query::queries::resolve_instance_raw::Storage","rustc_middle::query::queries::reveal_opaque_types_in_bounds::Storage","rustc_middle::query::queries::diagnostic_hir_wf_check::Storage","rustc_middle::query::queries::check_validity_requirement::Storage","rustc_middle::query::queries::compare_impl_const::Storage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()