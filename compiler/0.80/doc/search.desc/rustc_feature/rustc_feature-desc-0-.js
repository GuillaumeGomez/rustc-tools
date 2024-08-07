searchState.loadedDescShard("rustc_feature", 0, "Feature gates\nFormerly unstable features that have now been accepted …\nAllow use of unstable features, as on nightly.\nHow to handle multiple duplicate attributes on the same …\nA template that the attribute input must match. Only …\nAttributes that have a special meaning to rustc or rustdoc.\nErrors are bypassed for bootstrapping. This is required …\nBuiltin attribute that is only allowed at the crate level\nDisallow use of unstable features, as on beta/stable …\nDuplicates of this attribute are allowed.\nDuplicates after the first attribute will be an error.\nDuplicates preceding the last instance of the attribute …\nA set of features to be used by later passes.\nDuplicates after the first attribute will be an …\nDuplicates preceding the last instance of the attribute …\nIs gated by a given feature gate, reason and function to …\nSome features are not allowed to be used together at the …\nNormal, builtin attribute that is consumed by the compiler …\nNormal attribute that does not need <code>#[unsafe(...)]</code>\nFormerly unstable features that have now been removed.\nUnstable language features that are being implemented or …\nUngated attribute, can be used on all release channels\nUnsafe attribute that requires safety obligations to be …\nDuplicates after the first attribute will be an …\nSame as <code>WarnFollowing</code>, but only issues warnings for …\nAllows <code>extern &quot;avr-interrupt&quot; fn()</code> and …\nAllows <code>extern &quot;C-cmse-nonsecure-call&quot; fn()</code>.\nAllows <code>extern &quot;msp430-interrupt&quot; fn()</code>.\nAllows <code>extern &quot;ptx-*&quot; fn()</code>.\nAllows <code>extern &quot;riscv-interrupt-m&quot; fn()</code> and …\nActive state of individual features (unstable only). …\nAllows using the <code>vectorcall</code> ABI.\nAllows <code>extern &quot;x86-interrupt&quot; fn()</code>.\nList of the accepted feature gates.\nAllows additional const parameter types, such as <code>[u8; 10]</code> …\nAllows defining an <code>#[alloc_error_handler]</code>.\nAllows using <code>#![needs_allocator]</code>, an implementation detail …\nAllows using <code>#[allow_internal_unsafe]</code>. This is an …\nAllows using <code>#[allow_internal_unstable]</code>. This is an …\nAllows using anonymous lifetimes in argument-position …\nAllows trait methods with arbitrary self types.\nAllows using <code>const</code> operands in inline assembly.\nEnables experimental inline assembly support for …\nAllows using <code>label</code> operands in inline assembly.\nAllows the <code>may_unwind</code> option in inline assembly.\nAllows users to enforce equality of associated constants …\nAllows associated type defaults.\nAllows <code>async || body</code> closures.\nAllows <code>#[track_caller]</code> on async functions.\nAllows <code>for await</code> loops.\nAllows features specific to auto traits. Renamed from …\nAllows using <code>box</code> in patterns (RFC 469).\nBuilt-in attributes and <code>cfg</code> flag gating.\nAllows builtin # foo() syntax\nAllows using C-variadics.\nAllows the use of <code>#[cfg(overflow_checks)</code> to check if …\nProvides the relocation model information as cfg entry\nAllows the use of <code>#[cfg(sanitize = &quot;option&quot;)]</code>; set when …\nAllows <code>cfg(sanitizer_cfi_generalize_pointers)</code> and …\nAllows <code>cfg(target(abi = &quot;...&quot;))</code>.\nAllows <code>cfg(target_has_atomic_load_store = &quot;...&quot;)</code>.\nAllows <code>cfg(target_has_atomic_equal_alignment = &quot;...&quot;)</code>.\nAllows <code>cfg(target_thread_local)</code>.\nAllows the use of <code>#[cfg(ub_checks)</code> to check if UB checks …\nAllow conditional compilation depending on rust version\nAllows to use the <code>#[cfi_encoding = &quot;&quot;]</code> attribute.\nAllows <code>for&lt;...&gt;</code> on closures and coroutines.\nAllows <code>#[track_caller]</code> on closures and coroutines.\nAllows to use the <code>#[cmse_nonsecure_entry]</code> attribute.\nAllows identifying the <code>compiler_builtins</code> crate.\nAllows <code>async {}</code> expressions in const contexts.\nAllows <code>const || {}</code> closures in const contexts.\nAllows the definition of <code>const extern fn</code> and …\nAllows basic arithmetic on floating point types in a …\nAllows <code>for _ in _</code> loops in const contexts.\nAllows using <code>&amp;mut</code> in constant functions.\nBe more precise when looking for live drops in a const …\nAllows references to types with interior mutability within …\nAllows creating pointers and references to <code>static</code> items in …\nAllows <code>impl const Trait for T</code> syntax.\nAllows the <code>?</code> operator in const contexts.\nAllows coroutines to be cloned.\nAllows defining coroutines.\nAllows function attribute <code>#[coverage(on/off)]</code>, to control …\nAllows non-builtin attributes in inner attribute position.\nAllows writing custom MIR\nAllows custom test frameworks with <code>#![test_runner]</code> and …\nAllows declarative macros 2.0 (<code>macro</code>).\n<code>declared_lang_features</code> + <code>declared_lib_features</code>.\n<code>#![feature]</code> attrs for language features, for error …\n<code>#![feature]</code> attrs for non-language (library) features. “…\nAllows default type parameters to influence type inference.\nAllows using <code>#[deprecated_safe]</code> to deprecate the safeness …\nAllows having using <code>suggestion</code> in the <code>#[deprecated]</code> …\nAllows deref patterns.\nAllows deriving <code>SmartPointer</code> traits\nControls errors in trait implementations.\nTells rustdoc to automatically generate <code>#[doc(cfg(...))]</code>.\nAllows <code>#[doc(cfg(...))]</code>.\nAllows <code>#[doc(cfg_hide(...))]</code>.\nAllows <code>#[doc(masked)]</code>.\nAllows <code>#[doc(notable_trait)]</code>. Renamed from <code>doc_spotlight</code>.\nAllows using the <code>may_dangle</code> attribute (RFC 1327).\nAllows <code>dyn* Trait</code> objects.\nUses generic effect parameters for ~const bounds\nWhether this builtin attribute is encoded cross crate. …\nWhether this attribute is encode cross crate.\nAllows exhaustive pattern matching on types that contain …\nAllows explicit tail calls via <code>become</code> expression.\nUses 2024 rules for matching <code>expr</code> fragments in macros. …\nAllows using <code>efiapi</code>, <code>sysv64</code> and <code>win64</code> as calling convention\nAllows defining <code>extern type</code>s.\nAllow using 128-bit (quad precision) floating point …\nAllow using 16-bit (half precision) floating point numbers.\nAllows the use of <code>#[ffi_const]</code> on foreign functions.\nAllows the use of <code>#[ffi_pure]</code> on foreign functions.\nFind a gated cfg determined by the <code>pred</code>icate which is …\nAllows using <code>#[repr(align(...))]</code> on function items\nSupport delegating implementation of functions to other …\nAllows impls for the Freeze trait.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThis takes into account <code>RUSTC_BOOTSTRAP</code>.\nAllows using the <code>#[fundamental]</code> attribute.\nAllows defining gen blocks and <code>gen fn</code>.\nInfer generic args for both consts and types.\nOutputs useful <code>assert!</code> messages\nAn extension to the <code>generic_associated_types</code> feature, …\nAllows non-trivial generic constants which have to have …\nAllows generic parameters and where-clauses on free &amp; …\nAllows registering static items globally, possibly across …\nAllows using <code>..=X</code> as a patterns in slices.\nAllows <code>if let</code> guard in match arms.\nAllows <code>impl Trait</code> to be used inside associated types (RFC …\nAllows <code>impl Trait</code> as output type in <code>Fn</code> traits in return …\nAllows associated types in inherent impls.\nAllow anonymous constants from an inline <code>const</code> block in …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAllows using <code>pointer</code> and <code>reference</code> in intra-doc links\nAllows using the <code>rust-intrinsic</code>’s “ABI”.\nAllows using <code>#[lang = &quot;..&quot;]</code> attribute for linking items to …\nAllow to have type alias types for inter-crate use.\nAllows <code>if/while p &amp;&amp; let q = r &amp;&amp; ...</code> chains.\nChanges <code>impl Trait</code> to capture all lifetimes in scope.\nAllows using <code>#[link(kind = &quot;link-arg&quot;, name = &quot;...&quot;)]</code> to …\nAllows <code>#[link(..., cfg(..))]</code>; perma-unstable per #37406\nAllows using <code>#[link_name=&quot;llvm.*&quot;]</code>.\nAllows using the <code>#[linkage = &quot;..&quot;]</code> attribute.\nIf <code>Some</code>, the attribute is allowed to take a list of items …\nGive access to additional metadata about declarative macro …\nProvides a way to concatenate identifiers using …\nAllows <code>#[marker]</code> on certain traits allowing overlapping …\nAllows exhaustive pattern matching on types that contain …\nA minimal, sound subset of specialization intended to be …\nAllows qualified paths in struct expressions, struct …\nAllows the <code>multiple_supertrait_upcastable</code> lint.\nAllows the <code>#[must_not_suspend]</code> attribute.\nAllows <code>mut ref</code> and <code>mut ref mut</code> identifier patterns.\nAllows using <code>#[naked]</code> on functions.\nIf <code>Some</code>, the attribute is allowed to be a name/value pair …\nAllows specifying the as-needed link modifier\nAllows declaring with <code>#![needs_panic_runtime]</code> that a panic …\nAllow negative trait bounds. This is an internal-only …\nAllow negative trait implementations.\nAllows the <code>!</code> pattern.\nAllows the <code>!</code> type. Does not imply ‘exhaustive_patterns’…\nAllows diverging expressions to fall back to <code>!</code> rather than …\nAllows <code>#![no_core]</code>.\nAllows the use of <code>no_sanitize</code> attribute.\nAllows using the <code>non_exhaustive_omitted_patterns</code> lint.\nAllows <code>for&lt;T&gt;</code> binders in where-clauses\nAllows making <code>dyn Trait</code> well-formed even if <code>Trait</code> is not …\nAllows using enums in offset_of!\nAllows using multiple nested field accesses in offset_of!\nAllows using fields with slice type in offset_of!\nAllows using <code>#[omit_gdb_pretty_printer_section]</code>.\nIf non-empty, the attribute is allowed to take a list …\nAllows using <code>#[optimize(X)]</code>.\nAllows using the <code>#![panic_runtime]</code> attribute.\nAllows specifying nop padding on functions for dynamic …\nSet the maximum pattern complexity allowed (not limited by …\nAllows using pattern types.\nAllows postfix match <code>expr.match { ... }</code>\nAllows <code>use&lt;&#39;a, &#39;b, A, B&gt;</code> in <code>impl Trait + use&lt;...&gt;</code> for …\nAllows using <code>#[prelude_import]</code> on glob <code>use</code> items.\nAllows macro attributes on expressions, statements and …\nUsed to identify crates that contain the profiler runtime.\nAllows <code>&amp;raw const $place_expr</code> and <code>&amp;raw mut $place_expr</code> …\nMakes <code>&amp;</code> and <code>&amp;mut</code> patterns eat only one layer of references …\nMakes <code>&amp;</code> and <code>&amp;mut</code> patterns eat only one layer of references …\nAllows using the <code>#[register_tool]</code> attribute.\nList of the removed feature gates.\nAllows the <code>#[repr(i128)]</code> attribute for enums.\nAllows <code>repr(simd)</code> and importing the various simd …\nAllows enums like Result&lt;T, E&gt; to be used across FFI, if T…\nAllows bounding the return type of AFIT/RPITIT.\nAllows <code>extern &quot;rust-cold&quot;</code>.\nAllows using <code>#[rustc_allow_const_fn_unstable]</code>. This is an …\nAllows using <code>rustc_*</code> attributes (RFC 572).\nAllows using compiler’s own crates.\nAllows using internal rustdoc features like <code>doc(keyword)</code>.\nAllows using the <code>rustdoc::missing_doc_code_examples</code> lint\nShortern the tail expression lifetime\nAllows the use of SIMD types in functions declared in …\nFor unstable features: the version the feature was added …\nAllows specialization of implementations (RFC 1210).\nAllows using the <code>#[stable]</code> and <code>#[unstable]</code> attributes.\nAllows using <code>#[start]</code> on a function indicating that it is …\nAllows attributes on expressions and non-item statements.\nAllows lints part of the strict provenance effort.\nAllows string patterns to dereference values to match them.\nAllows using <code>#[structural_match]</code> which indicates that a …\nAllows the use of <code>#[target_feature]</code> on safe functions.\nAdded for testing unstable lints; perma-unstable.\nAllows using <code>#[thread_local]</code> on <code>static</code> items.\nAllows defining <code>trait X = A + B;</code> alias items.\nAllows dyn upcasting trait objects via supertraits. Dyn …\nAllows for transmuting between arrays with sizes that …\nAllows #[repr(transparent)] on unions (RFC 2645).\nAllows inconsistent bounds in where clauses.\nAllows using <code>try {...}</code> expressions.\nAllows <code>impl Trait</code> to be used inside type aliases (RFC …\nAllows creation of instances of a struct by moving fields …\nAllows using the <code>rust-call</code> ABI.\nAllows unnamed fields of struct and union type\nAllows unsafe attributes.\nAllows unsafe on extern declarations and safety qualifiers …\nAllows const generic parameters to be defined with types …\nAllows unsized fn parameters.\nAllows unsized rvalues at arguments and parameters.\nAllows unsized tuple coercion.\nList of the unstable feature gates.\nAllows using the <code>#[used(linker)]</code> (or <code>#[used(compiler)]</code>) …\nUse for stable + negative coherence and strict coherence …\nIf <code>true</code>, the attribute is allowed to be a bare word like …\nAllows use of x86 <code>AMX</code> target-feature attributes and …\nAllows use of the <code>xop</code> target-feature\nAllows <code>do yeet</code> expressions\nFormerly unstable features that have now been accepted …\nHow to handle multiple duplicate attributes on the same …\nA template that the attribute input must match. Only …\nAttributes that have a special meaning to rustc or rustdoc.\nBuiltin attribute that is only allowed at the crate level\nDuplicates of this attribute are allowed.\nDuplicates after the first attribute will be an error.\nDuplicates preceding the last instance of the attribute …\nDuplicates after the first attribute will be an …\nDuplicates preceding the last instance of the attribute …\n<code>cfg(...)</code>’s that are feature gated.\nIs gated by a given feature gate, reason and function to …\nNormal, builtin attribute that is consumed by the compiler …\nNormal attribute that does not need <code>#[unsafe(...)]</code>\nUngated attribute, can be used on all release channels\nUnsafe attribute that requires safety obligations to be …\nDuplicates after the first attribute will be an …\nSame as <code>WarnFollowing</code>, but only issues warnings for …\nWhether this builtin attribute is encoded cross crate. …\nWhether this attribute is encode cross crate.\nFind a gated cfg determined by the <code>pred</code>icate which is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf <code>Some</code>, the attribute is allowed to take a list of items …\nIf <code>Some</code>, the attribute is allowed to be a name/value pair …\nIf non-empty, the attribute is allowed to take a list …\nA convenience macro for constructing attribute templates. …\nIf <code>true</code>, the attribute is allowed to be a bare word like …\nFormerly unstable features that have now been removed.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA set of features to be used by later passes.\nSome features are not allowed to be used together at the …\nUnstable language features that are being implemented or …\nAllows <code>extern &quot;avr-interrupt&quot; fn()</code> and …\nAllows <code>extern &quot;C-cmse-nonsecure-call&quot; fn()</code>.\nAllows <code>extern &quot;msp430-interrupt&quot; fn()</code>.\nAllows <code>extern &quot;ptx-*&quot; fn()</code>.\nAllows <code>extern &quot;riscv-interrupt-m&quot; fn()</code> and …\nActive state of individual features (unstable only). …\nAllows using the <code>vectorcall</code> ABI.\nAllows <code>extern &quot;x86-interrupt&quot; fn()</code>.\nIs the given feature active (enabled by the user)?\nAllows additional const parameter types, such as <code>[u8; 10]</code> …\nThis is intended for hashing the set of active features.\nAllows defining an <code>#[alloc_error_handler]</code>.\nAllows using <code>#![needs_allocator]</code>, an implementation detail …\nAllows using <code>#[allow_internal_unsafe]</code>. This is an …\nAllows using <code>#[allow_internal_unstable]</code>. This is an …\nAllows using anonymous lifetimes in argument-position …\nAllows trait methods with arbitrary self types.\nAllows using <code>const</code> operands in inline assembly.\nEnables experimental inline assembly support for …\nAllows using <code>label</code> operands in inline assembly.\nAllows the <code>may_unwind</code> option in inline assembly.\nAllows users to enforce equality of associated constants …\nAllows associated type defaults.\nAllows <code>async || body</code> closures.\nAllows <code>#[track_caller]</code> on async functions.\nAllows <code>for await</code> loops.\nAllows features specific to auto traits. Renamed from …\nAllows using <code>box</code> in patterns (RFC 469).\nAllows builtin # foo() syntax\nAllows using C-variadics.\nAllows the use of <code>#[cfg(overflow_checks)</code> to check if …\nProvides the relocation model information as cfg entry\nAllows the use of <code>#[cfg(sanitize = &quot;option&quot;)]</code>; set when …\nAllows <code>cfg(sanitizer_cfi_generalize_pointers)</code> and …\nAllows <code>cfg(target(abi = &quot;...&quot;))</code>.\nAllows <code>cfg(target_has_atomic_load_store = &quot;...&quot;)</code>.\nAllows <code>cfg(target_has_atomic_equal_alignment = &quot;...&quot;)</code>.\nAllows <code>cfg(target_thread_local)</code>.\nAllows the use of <code>#[cfg(ub_checks)</code> to check if UB checks …\nAllow conditional compilation depending on rust version\nAllows to use the <code>#[cfi_encoding = &quot;&quot;]</code> attribute.\nAllows <code>for&lt;...&gt;</code> on closures and coroutines.\nAllows <code>#[track_caller]</code> on closures and coroutines.\nAllows to use the <code>#[cmse_nonsecure_entry]</code> attribute.\nAllows identifying the <code>compiler_builtins</code> crate.\nAllows <code>async {}</code> expressions in const contexts.\nAllows <code>const || {}</code> closures in const contexts.\nAllows the definition of <code>const extern fn</code> and …\nAllows basic arithmetic on floating point types in a …\nAllows <code>for _ in _</code> loops in const contexts.\nAllows using <code>&amp;mut</code> in constant functions.\nBe more precise when looking for live drops in a const …\nAllows references to types with interior mutability within …\nAllows creating pointers and references to <code>static</code> items in …\nAllows <code>impl const Trait for T</code> syntax.\nAllows the <code>?</code> operator in const contexts.\nAllows coroutines to be cloned.\nAllows defining coroutines.\nAllows function attribute <code>#[coverage(on/off)]</code>, to control …\nAllows non-builtin attributes in inner attribute position.\nAllows writing custom MIR\nAllows custom test frameworks with <code>#![test_runner]</code> and …\nAllows declarative macros 2.0 (<code>macro</code>).\nIs the given feature explicitly declared, i.e. named in a …\n<code>declared_lang_features</code> + <code>declared_lib_features</code>.\n<code>#![feature]</code> attrs for language features, for error …\n<code>#![feature]</code> attrs for non-language (library) features. “…\nAllows default type parameters to influence type inference.\nAllows using <code>#[deprecated_safe]</code> to deprecate the safeness …\nAllows having using <code>suggestion</code> in the <code>#[deprecated]</code> …\nAllows deref patterns.\nAllows deriving <code>SmartPointer</code> traits\nControls errors in trait implementations.\nTells rustdoc to automatically generate <code>#[doc(cfg(...))]</code>.\nAllows <code>#[doc(cfg(...))]</code>.\nAllows <code>#[doc(cfg_hide(...))]</code>.\nAllows <code>#[doc(masked)]</code>.\nAllows <code>#[doc(notable_trait)]</code>. Renamed from <code>doc_spotlight</code>.\nAllows using the <code>may_dangle</code> attribute (RFC 1327).\nAllows <code>dyn* Trait</code> objects.\nUses generic effect parameters for ~const bounds\nAllows exhaustive pattern matching on types that contain …\nAllows explicit tail calls via <code>become</code> expression.\nUses 2024 rules for matching <code>expr</code> fragments in macros. …\nAllows using <code>efiapi</code>, <code>sysv64</code> and <code>win64</code> as calling convention\nAllows defining <code>extern type</code>s.\nAllow using 128-bit (quad precision) floating point …\nAllow using 16-bit (half precision) floating point numbers.\nAllows the use of <code>#[ffi_const]</code> on foreign functions.\nAllows the use of <code>#[ffi_pure]</code> on foreign functions.\nAllows using <code>#[repr(align(...))]</code> on function items\nSupport delegating implementation of functions to other …\nAllows impls for the Freeze trait.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAllows using the <code>#[fundamental]</code> attribute.\nAllows defining gen blocks and <code>gen fn</code>.\nInfer generic args for both consts and types.\nOutputs useful <code>assert!</code> messages\nAn extension to the <code>generic_associated_types</code> feature, …\nAllows non-trivial generic constants which have to have …\nAllows generic parameters and where-clauses on free &amp; …\nAllows registering static items globally, possibly across …\nAllows using <code>..=X</code> as a patterns in slices.\nAllows <code>if let</code> guard in match arms.\nAllows <code>impl Trait</code> to be used inside associated types (RFC …\nAllows <code>impl Trait</code> as output type in <code>Fn</code> traits in return …\nSome features are known to be incomplete and using them is …\nAllows associated types in inherent impls.\nAllow anonymous constants from an inline <code>const</code> block in …\nSome features are internal to the compiler and standard …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAllows using <code>pointer</code> and <code>reference</code> in intra-doc links\nAllows using the <code>rust-intrinsic</code>’s “ABI”.\nAllows using <code>#[lang = &quot;..&quot;]</code> attribute for linking items to …\nAllow to have type alias types for inter-crate use.\nAllows <code>if/while p &amp;&amp; let q = r &amp;&amp; ...</code> chains.\nChanges <code>impl Trait</code> to capture all lifetimes in scope.\nAllows using <code>#[link(kind = &quot;link-arg&quot;, name = &quot;...&quot;)]</code> to …\nAllows <code>#[link(..., cfg(..))]</code>; perma-unstable per #37406\nAllows using <code>#[link_name=&quot;llvm.*&quot;]</code>.\nAllows using the <code>#[linkage = &quot;..&quot;]</code> attribute.\nGive access to additional metadata about declarative macro …\nProvides a way to concatenate identifiers using …\nAllows <code>#[marker]</code> on certain traits allowing overlapping …\nAllows exhaustive pattern matching on types that contain …\nA minimal, sound subset of specialization intended to be …\nAllows qualified paths in struct expressions, struct …\nAllows the <code>multiple_supertrait_upcastable</code> lint.\nAllows the <code>#[must_not_suspend]</code> attribute.\nAllows <code>mut ref</code> and <code>mut ref mut</code> identifier patterns.\nAllows using <code>#[naked]</code> on functions.\nAllows specifying the as-needed link modifier\nAllows declaring with <code>#![needs_panic_runtime]</code> that a panic …\nAllow negative trait bounds. This is an internal-only …\nAllow negative trait implementations.\nAllows the <code>!</code> pattern.\nAllows the <code>!</code> type. Does not imply ‘exhaustive_patterns’…\nAllows diverging expressions to fall back to <code>!</code> rather than …\nAllows <code>#![no_core]</code>.\nAllows the use of <code>no_sanitize</code> attribute.\nAllows using the <code>non_exhaustive_omitted_patterns</code> lint.\nAllows <code>for&lt;T&gt;</code> binders in where-clauses\nAllows making <code>dyn Trait</code> well-formed even if <code>Trait</code> is not …\nAllows using enums in offset_of!\nAllows using multiple nested field accesses in offset_of!\nAllows using fields with slice type in offset_of!\nAllows using <code>#[omit_gdb_pretty_printer_section]</code>.\nAllows using <code>#[optimize(X)]</code>.\nAllows using the <code>#![panic_runtime]</code> attribute.\nAllows specifying nop padding on functions for dynamic …\nSet the maximum pattern complexity allowed (not limited by …\nAllows using pattern types.\nAllows postfix match <code>expr.match { ... }</code>\nAllows <code>use&lt;&#39;a, &#39;b, A, B&gt;</code> in <code>impl Trait + use&lt;...&gt;</code> for …\nAllows using <code>#[prelude_import]</code> on glob <code>use</code> items.\nAllows macro attributes on expressions, statements and …\nUsed to identify crates that contain the profiler runtime.\nAllows <code>&amp;raw const $place_expr</code> and <code>&amp;raw mut $place_expr</code> …\nMakes <code>&amp;</code> and <code>&amp;mut</code> patterns eat only one layer of references …\nMakes <code>&amp;</code> and <code>&amp;mut</code> patterns eat only one layer of references …\nAllows using the <code>#[register_tool]</code> attribute.\nAllows the <code>#[repr(i128)]</code> attribute for enums.\nAllows <code>repr(simd)</code> and importing the various simd …\nAllows enums like Result&lt;T, E&gt; to be used across FFI, if T…\nAllows bounding the return type of AFIT/RPITIT.\nAllows <code>extern &quot;rust-cold&quot;</code>.\nAllows using <code>#[rustc_allow_const_fn_unstable]</code>. This is an …\nAllows using <code>rustc_*</code> attributes (RFC 572).\nAllows using compiler’s own crates.\nAllows using internal rustdoc features like <code>doc(keyword)</code>.\nAllows using the <code>rustdoc::missing_doc_code_examples</code> lint\nShortern the tail expression lifetime\nAllows the use of SIMD types in functions declared in …\nAllows specialization of implementations (RFC 1210).\nAllows using the <code>#[stable]</code> and <code>#[unstable]</code> attributes.\nAllows using <code>#[start]</code> on a function indicating that it is …\nAllows attributes on expressions and non-item statements.\nAllows lints part of the strict provenance effort.\nAllows string patterns to dereference values to match them.\nAllows using <code>#[structural_match]</code> which indicates that a …\nAllows the use of <code>#[target_feature]</code> on safe functions.\nAdded for testing unstable lints; perma-unstable.\nAllows using <code>#[thread_local]</code> on <code>static</code> items.\nAllows defining <code>trait X = A + B;</code> alias items.\nAllows dyn upcasting trait objects via supertraits. Dyn …\nAllows for transmuting between arrays with sizes that …\nAllows #[repr(transparent)] on unions (RFC 2645).\nAllows inconsistent bounds in where clauses.\nAllows using <code>try {...}</code> expressions.\nAllows <code>impl Trait</code> to be used inside type aliases (RFC …\nAllows creation of instances of a struct by moving fields …\nAllows using the <code>rust-call</code> ABI.\nAllows unnamed fields of struct and union type\nAllows unsafe attributes.\nAllows unsafe on extern declarations and safety qualifiers …\nAllows const generic parameters to be defined with types …\nAllows unsized fn parameters.\nAllows unsized rvalues at arguments and parameters.\nAllows unsized tuple coercion.\nAllows using the <code>#[used(linker)]</code> (or <code>#[used(compiler)]</code>) …\nUse for stable + negative coherence and strict coherence …\nAllows use of x86 <code>AMX</code> target-feature attributes and …\nAllows use of the <code>xop</code> target-feature\nAllows <code>do yeet</code> expressions")