(function() {
    var implementors = Object.fromEntries([["rustc_infer",[]],["rustc_middle",[["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for &amp;'a <a class=\"type\" href=\"rustc_middle/ty/list/type.List.html\" title=\"type rustc_middle::ty::list::List\">List</a>&lt;<a class=\"enum\" href=\"rustc_middle/ty/sty/enum.BoundVariableKind.html\" title=\"enum rustc_middle::ty::sty::BoundVariableKind\">BoundVariableKind</a>&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for &amp;'a <a class=\"type\" href=\"rustc_middle/ty/list/type.List.html\" title=\"type rustc_middle::ty::list::List\">List</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/generic_args/struct.GenericArg.html\" title=\"struct rustc_middle::ty::generic_args::GenericArg\">GenericArg</a>&lt;'a&gt;&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for &amp;'a <a class=\"type\" href=\"rustc_middle/ty/list/type.List.html\" title=\"type rustc_middle::ty::list::List\">List</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'a&gt;&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for &amp;'a <a class=\"type\" href=\"rustc_middle/ty/list/type.List.html\" title=\"type rustc_middle::ty::list::List\">List</a>&lt;<a class=\"type\" href=\"rustc_middle/ty/predicate/type.PolyExistentialPredicate.html\" title=\"type rustc_middle::ty::predicate::PolyExistentialPredicate\">PolyExistentialPredicate</a>&lt;'a&gt;&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for &amp;'a [<a class=\"enum\" href=\"rustc_middle/ty/consts/valtree/enum.ValTree.html\" title=\"enum rustc_middle::ty::consts::valtree::ValTree\">ValTree</a>&lt;'a&gt;]"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/mir/interpret/allocation/struct.ConstAllocation.html\" title=\"struct rustc_middle::mir::interpret::allocation::ConstAllocation\">ConstAllocation</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/consts/struct.Const.html\" title=\"struct rustc_middle::ty::consts::Const\">Const</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/generic_args/struct.GenericArg.html\" title=\"struct rustc_middle::ty::generic_args::GenericArg\">GenericArg</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/pattern/struct.Pattern.html\" title=\"struct rustc_middle::ty::pattern::Pattern\">Pattern</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/predicate/struct.Clause.html\" title=\"struct rustc_middle::ty::predicate::Clause\">Clause</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/predicate/struct.Predicate.html\" title=\"struct rustc_middle::ty::predicate::Predicate\">Predicate</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/region/struct.Region.html\" title=\"struct rustc_middle::ty::region::Region\">Region</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.Term.html\" title=\"struct rustc_middle::ty::Term\">Term</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/struct.Ty.html\" title=\"struct rustc_middle::ty::Ty\">Ty</a>&lt;'a&gt;"],["impl&lt;'a, 'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_target/abi/struct.Layout.html\" title=\"struct rustc_target::abi::Layout\">Layout</a>&lt;'a&gt;"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_hir/hir/enum.Safety.html\" title=\"enum rustc_hir::hir::Safety\">Safety</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/interpret/value/enum.Scalar.html\" title=\"enum rustc_middle::mir::interpret::value::Scalar\">Scalar</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/traits/enum.IsConstable.html\" title=\"enum rustc_middle::traits::IsConstable\">IsConstable</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/enum.ClosureKind.html\" title=\"enum rustc_middle::ty::ClosureKind\">ClosureKind</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/enum.ImplPolarity.html\" title=\"enum rustc_middle::ty::ImplPolarity\">ImplPolarity</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/enum.PredicatePolarity.html\" title=\"enum rustc_middle::ty::PredicatePolarity\">PredicatePolarity</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/instance/enum.ReifyReason.html\" title=\"enum rustc_middle::ty::instance::ReifyReason\">ReifyReason</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc_target/spec/abi/enum.Abi.html\" title=\"enum rustc_target::spec::abi::Abi\">Abi</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_abi/struct.Size.html\" title=\"struct rustc_abi::Size\">Size</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/mir/interpret/pointer/struct.CtfeProvenance.html\" title=\"struct rustc_middle::mir::interpret::pointer::CtfeProvenance\">CtfeProvenance</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/mir/interpret/struct.AllocId.html\" title=\"struct rustc_middle::mir::interpret::AllocId\">AllocId</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/mir/struct.Promoted.html\" title=\"struct rustc_middle::mir::Promoted\">Promoted</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/sty/struct.ParamConst.html\" title=\"struct rustc_middle::ty::sty::ParamConst\">ParamConst</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/sty/struct.ParamTy.html\" title=\"struct rustc_middle::ty::sty::ParamTy\">ParamTy</a>"],["impl&lt;'tcx&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"struct\" href=\"rustc_span/def_id/struct.DefId.html\" title=\"struct rustc_span::def_id::DefId\">DefId</a>"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.Const.html\" title=\"enum rustc_middle::mir::consts::Const\">Const</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/mir/consts/enum.ConstValue.html\" title=\"enum rustc_middle::mir::consts::ConstValue\">ConstValue</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"enum\" href=\"rustc_middle/ty/instance/enum.InstanceKind.html\" title=\"enum rustc_middle::ty::instance::InstanceKind\">InstanceKind</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/mir/consts/struct.UnevaluatedConst.html\" title=\"struct rustc_middle::mir::consts::UnevaluatedConst\">UnevaluatedConst</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/instance/struct.Instance.html\" title=\"struct rustc_middle::ty::instance::Instance\">Instance</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.PrintClosureAsImpl.html\" title=\"struct rustc_middle::ty::print::pretty::PrintClosureAsImpl\">PrintClosureAsImpl</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.TraitPredPrintModifiersAndPath.html\" title=\"struct rustc_middle::ty::print::pretty::TraitPredPrintModifiersAndPath\">TraitPredPrintModifiersAndPath</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.TraitPredPrintWithBoundConstness.html\" title=\"struct rustc_middle::ty::print::pretty::TraitPredPrintWithBoundConstness\">TraitPredPrintWithBoundConstness</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.TraitRefPrintOnlyTraitName.html\" title=\"struct rustc_middle::ty::print::pretty::TraitRefPrintOnlyTraitName\">TraitRefPrintOnlyTraitName</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.TraitRefPrintOnlyTraitPath.html\" title=\"struct rustc_middle::ty::print::pretty::TraitRefPrintOnlyTraitPath\">TraitRefPrintOnlyTraitPath</a>&lt;'tcx&gt;"],["impl&lt;'tcx, '__lifted&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'__lifted&gt;&gt; for <a class=\"struct\" href=\"rustc_middle/ty/print/pretty/struct.TraitRefPrintSugared.html\" title=\"struct rustc_middle::ty::print::pretty::TraitRefPrintSugared\">TraitRefPrintSugared</a>&lt;'tcx&gt;"],["impl&lt;'tcx, T: <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"rustc_middle/ty/lift/trait.Lift.html\" title=\"trait rustc_middle::ty::lift::Lift\">Lift</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;"]]],["rustc_next_trait_solver",[["impl&lt;I, J&gt; Lift&lt;J&gt; for <a class=\"struct\" href=\"rustc_next_trait_solver/solve/eval_ctxt/struct.NestedGoals.html\" title=\"struct rustc_next_trait_solver::solve::eval_ctxt::NestedGoals\">NestedGoals</a>&lt;I&gt;<div class=\"where\">where\n    I: Interner,\n    J: Interner,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rustc_next_trait_solver/solve/struct.Goal.html\" title=\"struct rustc_next_trait_solver::solve::Goal\">Goal</a>&lt;I, NormalizesTo&lt;I&gt;&gt;&gt;: Lift&lt;J, Lifted = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rustc_next_trait_solver/solve/struct.Goal.html\" title=\"struct rustc_next_trait_solver::solve::Goal\">Goal</a>&lt;J, NormalizesTo&lt;J&gt;&gt;&gt;&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"enum\" href=\"rustc_next_trait_solver/solve/enum.GoalSource.html\" title=\"enum rustc_next_trait_solver::solve::GoalSource\">GoalSource</a>, <a class=\"struct\" href=\"rustc_next_trait_solver/solve/struct.Goal.html\" title=\"struct rustc_next_trait_solver::solve::Goal\">Goal</a>&lt;I, I::Predicate&gt;)&gt;: Lift&lt;J, Lifted = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"enum\" href=\"rustc_next_trait_solver/solve/enum.GoalSource.html\" title=\"enum rustc_next_trait_solver::solve::GoalSource\">GoalSource</a>, <a class=\"struct\" href=\"rustc_next_trait_solver/solve/struct.Goal.html\" title=\"struct rustc_next_trait_solver::solve::Goal\">Goal</a>&lt;J, J::Predicate&gt;)&gt;&gt;,</div>"]]],["rustc_trait_selection",[]],["rustc_type_ir",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[18,21565,1911,29,21]}