(function() {
    var type_impls = Object.fromEntries([["rustc_const_eval",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#224-227\">source</a><a href=\"#impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'mir, 'tcx, A&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html\" title=\"struct rustc_mir_dataflow::framework::cursor::ResultsCursor\">ResultsCursor</a>&lt;'mir, 'tcx, A&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html\" title=\"trait rustc_mir_dataflow::framework::GenKillAnalysis\">GenKillAnalysis</a>&lt;'tcx&gt;,\n    &lt;A as <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html\" title=\"trait rustc_mir_dataflow::framework::AnalysisDomain\">AnalysisDomain</a>&lt;'tcx&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a>: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.BitSetExt.html\" title=\"trait rustc_mir_dataflow::framework::BitSetExt\">BitSetExt</a>&lt;&lt;A as <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html\" title=\"trait rustc_mir_dataflow::framework::GenKillAnalysis\">GenKillAnalysis</a>&lt;'tcx&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html#associatedtype.Idx\" title=\"type rustc_mir_dataflow::framework::GenKillAnalysis::Idx\">Idx</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.contains\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#229\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.contains\" class=\"fn\">contains</a>(&amp;self, elem: &lt;A as <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html\" title=\"trait rustc_mir_dataflow::framework::GenKillAnalysis\">GenKillAnalysis</a>&lt;'tcx&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html#associatedtype.Idx\" title=\"type rustc_mir_dataflow::framework::GenKillAnalysis::Idx\">Idx</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></div></details>",0,"rustc_const_eval::check_consts::check::QualifResults"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#37-39\">source</a><a href=\"#impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'mir, 'tcx, A&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html\" title=\"struct rustc_mir_dataflow::framework::cursor::ResultsCursor\">ResultsCursor</a>&lt;'mir, 'tcx, A&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.Analysis.html\" title=\"trait rustc_mir_dataflow::framework::Analysis\">Analysis</a>&lt;'tcx&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; &amp;&lt;A as <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html\" title=\"trait rustc_mir_dataflow::framework::AnalysisDomain\">AnalysisDomain</a>&lt;'tcx&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a></h4></section></summary><div class=\"docblock\"><p>Returns the dataflow state at the current location.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#47\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.body\" class=\"fn\">body</a>(&amp;self) -&gt; &amp;'mir <a class=\"struct\" href=\"rustc_middle/mir/struct.Body.html\" title=\"struct rustc_middle::mir::Body\">Body</a>&lt;'tcx&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the body this analysis was run on.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#52\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.into_results\" class=\"fn\">into_results</a>(self) -&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Unwraps this cursor, returning the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#57\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.new\" class=\"fn\">new</a>(\n    body: &amp;'mir <a class=\"struct\" href=\"rustc_middle/mir/struct.Body.html\" title=\"struct rustc_middle::mir::Body\">Body</a>&lt;'tcx&gt;,\n    results: <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;,\n) -&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html\" title=\"struct rustc_mir_dataflow::framework::cursor::ResultsCursor\">ResultsCursor</a>&lt;'mir, 'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a new cursor that can inspect <code>results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#83\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.results\" class=\"fn\">results</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mut_results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#88\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.mut_results\" class=\"fn\">mut_results</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.analysis\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#93\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.analysis\" class=\"fn\">analysis</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;A</a></h4></section></summary><div class=\"docblock\"><p>Returns the <code>Analysis</code> used to generate the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mut_analysis\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#98\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.mut_analysis\" class=\"fn\">mut_analysis</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut A</a></h4></section></summary><div class=\"docblock\"><p>Returns the <code>Analysis</code> used to generate the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_block_start\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#122\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_to_block_start\" class=\"fn\">seek_to_block_start</a>(&amp;mut self, block: <a class=\"struct\" href=\"rustc_middle/mir/struct.BasicBlock.html\" title=\"struct rustc_middle::mir::BasicBlock\">BasicBlock</a>)</h4></section></summary><div class=\"docblock\"><p>Resets the cursor to hold the state prior to the first statement in a basic block.</p>\n<p>For forward analyses, this is the entry set for the given block.</p>\n<p>For backward analyses, this is the state that will be propagated to its\npredecessors (ignoring edge-specific effects).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_block_end\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#136\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_to_block_end\" class=\"fn\">seek_to_block_end</a>(&amp;mut self, block: <a class=\"struct\" href=\"rustc_middle/mir/struct.BasicBlock.html\" title=\"struct rustc_middle::mir::BasicBlock\">BasicBlock</a>)</h4></section></summary><div class=\"docblock\"><p>Resets the cursor to hold the state after the terminator in a basic block.</p>\n<p>For backward analyses, this is the entry set for the given block.</p>\n<p>For forward analyses, this is the state that will be propagated to its\nsuccessors (ignoring edge-specific effects).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_before_primary_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#148\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_before_primary_effect\" class=\"fn\">seek_before_primary_effect</a>(&amp;mut self, target: <a class=\"struct\" href=\"rustc_middle/mir/struct.Location.html\" title=\"struct rustc_middle::mir::Location\">Location</a>)</h4></section></summary><div class=\"docblock\"><p>Advances the cursor to hold the dataflow state at <code>target</code> before its “primary” effect is\napplied.</p>\n<p>The “before” effect at the target location <em>will be</em> applied.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_after_primary_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#156\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_after_primary_effect\" class=\"fn\">seek_after_primary_effect</a>(&amp;mut self, target: <a class=\"struct\" href=\"rustc_middle/mir/struct.Location.html\" title=\"struct rustc_middle::mir::Location\">Location</a>)</h4></section></summary><div class=\"docblock\"><p>Advances the cursor to hold the dataflow state at <code>target</code> after its “primary” effect is\napplied.</p>\n<p>The “before” effect at the target location will be applied as well.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_custom_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#218\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.apply_custom_effect\" class=\"fn\">apply_custom_effect</a>(\n    &amp;mut self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut A</a>, &amp;mut &lt;A as <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html\" title=\"trait rustc_mir_dataflow::framework::AnalysisDomain\">AnalysisDomain</a>&lt;'tcx&gt;&gt;::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a>),\n)</h4></section></summary><div class=\"docblock\"><p>Applies <code>f</code> to the cursor’s internal state.</p>\n<p>This can be used, e.g., to apply the call return effect directly to the cursor without\ncreating an extra copy of the dataflow state.</p>\n</div></details></div></details>",0,"rustc_const_eval::check_consts::check::QualifResults"]]],["rustc_mir_dataflow",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#224-232\">source</a><a href=\"#impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'mir, 'tcx, A&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html\" title=\"struct rustc_mir_dataflow::framework::cursor::ResultsCursor\">ResultsCursor</a>&lt;'mir, 'tcx, A&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html\" title=\"trait rustc_mir_dataflow::framework::GenKillAnalysis\">GenKillAnalysis</a>&lt;'tcx&gt;,\n    A::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a>: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.BitSetExt.html\" title=\"trait rustc_mir_dataflow::framework::BitSetExt\">BitSetExt</a>&lt;A::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html#associatedtype.Idx\" title=\"type rustc_mir_dataflow::framework::GenKillAnalysis::Idx\">Idx</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.contains\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#229-231\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.contains\" class=\"fn\">contains</a>(&amp;self, elem: A::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.GenKillAnalysis.html#associatedtype.Idx\" title=\"type rustc_mir_dataflow::framework::GenKillAnalysis::Idx\">Idx</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></div></details>",0,"rustc_mir_dataflow::impls::storage_liveness::BorrowedLocalsResults"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#37-222\">source</a><a href=\"#impl-ResultsCursor%3C'mir,+'tcx,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'mir, 'tcx, A&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html\" title=\"struct rustc_mir_dataflow::framework::cursor::ResultsCursor\">ResultsCursor</a>&lt;'mir, 'tcx, A&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"rustc_mir_dataflow/framework/trait.Analysis.html\" title=\"trait rustc_mir_dataflow::framework::Analysis\">Analysis</a>&lt;'tcx&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#42-44\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; &amp;A::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a></h4></section></summary><div class=\"docblock\"><p>Returns the dataflow state at the current location.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#47-49\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.body\" class=\"fn\">body</a>(&amp;self) -&gt; &amp;'mir <a class=\"struct\" href=\"rustc_middle/mir/struct.Body.html\" title=\"struct rustc_middle::mir::Body\">Body</a>&lt;'tcx&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the body this analysis was run on.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#52-54\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.into_results\" class=\"fn\">into_results</a>(self) -&gt; <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Unwraps this cursor, returning the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#57-73\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.new\" class=\"fn\">new</a>(body: &amp;'mir <a class=\"struct\" href=\"rustc_middle/mir/struct.Body.html\" title=\"struct rustc_middle::mir::Body\">Body</a>&lt;'tcx&gt;, results: <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns a new cursor that can inspect <code>results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#83-85\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.results\" class=\"fn\">results</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mut_results\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#88-90\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.mut_results\" class=\"fn\">mut_results</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"rustc_mir_dataflow/framework/engine/struct.Results.html\" title=\"struct rustc_mir_dataflow::framework::engine::Results\">Results</a>&lt;'tcx, A&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.analysis\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#93-95\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.analysis\" class=\"fn\">analysis</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;A</a></h4></section></summary><div class=\"docblock\"><p>Returns the <code>Analysis</code> used to generate the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mut_analysis\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#98-100\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.mut_analysis\" class=\"fn\">mut_analysis</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut A</a></h4></section></summary><div class=\"docblock\"><p>Returns the <code>Analysis</code> used to generate the underlying <code>Results</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_block_entry\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#107-114\">source</a><h4 class=\"code-header\">pub(super) fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_to_block_entry\" class=\"fn\">seek_to_block_entry</a>(&amp;mut self, block: <a class=\"struct\" href=\"rustc_middle/mir/struct.BasicBlock.html\" title=\"struct rustc_middle::mir::BasicBlock\">BasicBlock</a>)</h4></section></summary><div class=\"docblock\"><p>Resets the cursor to hold the entry set for the given basic block.</p>\n<p>For forward dataflow analyses, this is the dataflow state prior to the first statement.</p>\n<p>For backward dataflow analyses, this is the dataflow state after the terminator.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_block_start\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#122-128\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_to_block_start\" class=\"fn\">seek_to_block_start</a>(&amp;mut self, block: <a class=\"struct\" href=\"rustc_middle/mir/struct.BasicBlock.html\" title=\"struct rustc_middle::mir::BasicBlock\">BasicBlock</a>)</h4></section></summary><div class=\"docblock\"><p>Resets the cursor to hold the state prior to the first statement in a basic block.</p>\n<p>For forward analyses, this is the entry set for the given block.</p>\n<p>For backward analyses, this is the state that will be propagated to its\npredecessors (ignoring edge-specific effects).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_block_end\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#136-142\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_to_block_end\" class=\"fn\">seek_to_block_end</a>(&amp;mut self, block: <a class=\"struct\" href=\"rustc_middle/mir/struct.BasicBlock.html\" title=\"struct rustc_middle::mir::BasicBlock\">BasicBlock</a>)</h4></section></summary><div class=\"docblock\"><p>Resets the cursor to hold the state after the terminator in a basic block.</p>\n<p>For backward analyses, this is the entry set for the given block.</p>\n<p>For forward analyses, this is the state that will be propagated to its\nsuccessors (ignoring edge-specific effects).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_before_primary_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#148-150\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_before_primary_effect\" class=\"fn\">seek_before_primary_effect</a>(&amp;mut self, target: <a class=\"struct\" href=\"rustc_middle/mir/struct.Location.html\" title=\"struct rustc_middle::mir::Location\">Location</a>)</h4></section></summary><div class=\"docblock\"><p>Advances the cursor to hold the dataflow state at <code>target</code> before its “primary” effect is\napplied.</p>\n<p>The “before” effect at the target location <em>will be</em> applied.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_after_primary_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#156-158\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_after_primary_effect\" class=\"fn\">seek_after_primary_effect</a>(&amp;mut self, target: <a class=\"struct\" href=\"rustc_middle/mir/struct.Location.html\" title=\"struct rustc_middle::mir::Location\">Location</a>)</h4></section></summary><div class=\"docblock\"><p>Advances the cursor to hold the dataflow state at <code>target</code> after its “primary” effect is\napplied.</p>\n<p>The “before” effect at the target location will be applied as well.</p>\n</div></details><section id=\"method.seek_after\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#160-212\">source</a><h4 class=\"code-header\">fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.seek_after\" class=\"fn\">seek_after</a>(&amp;mut self, target: <a class=\"struct\" href=\"rustc_middle/mir/struct.Location.html\" title=\"struct rustc_middle::mir::Location\">Location</a>, effect: <a class=\"enum\" href=\"rustc_mir_dataflow/framework/enum.Effect.html\" title=\"enum rustc_mir_dataflow::framework::Effect\">Effect</a>)</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_custom_effect\" class=\"method\"><a class=\"src rightside\" href=\"src/rustc_mir_dataflow/framework/cursor.rs.html#218-221\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustc_mir_dataflow/framework/cursor/struct.ResultsCursor.html#tymethod.apply_custom_effect\" class=\"fn\">apply_custom_effect</a>(&amp;mut self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut A</a>, &amp;mut A::<a class=\"associatedtype\" href=\"rustc_mir_dataflow/framework/trait.AnalysisDomain.html#associatedtype.Domain\" title=\"type rustc_mir_dataflow::framework::AnalysisDomain::Domain\">Domain</a>))</h4></section></summary><div class=\"docblock\"><p>Applies <code>f</code> to the cursor’s internal state.</p>\n<p>This can be used, e.g., to apply the call return effect directly to the cursor without\ncreating an extra copy of the dataflow state.</p>\n</div></details></div></details>",0,"rustc_mir_dataflow::impls::storage_liveness::BorrowedLocalsResults"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14131,14535]}