searchState.loadedDescShard("rustc_transmute", 0, "Either transmutation is allowed, we have an error, or we …\nA condition which must hold for safe transmutation to be …\nSrc should have a stricter alignment than Dst, but it does …\nThe layout of the destination type is bit-incompatible …\nCan’t go from shared pointer to unique pointer\nThe layout of the destination type is not yet supported.\n<code>Dst</code> is larger than <code>Src</code>, and the excess bytes were not …\nThe layout of dst is unknown\nThe destination type may carry safety invariants.\nA referent of <code>Dst</code> is larger than a referent in <code>Src</code>.\nThe size of dst is overflow\nThe destination type is uninhabited.\n<code>Src</code> is transmutable into <code>Dst</code>, if all of the enclosed …\n<code>Src</code> is transmutable into <code>Dst</code> if any of the enclosed …\n<code>Src</code> is transmutable into <code>Dst</code>, if <code>src</code> is transmutable into …\nAnswers “why wasn’t the source type transmutable into …\nThe layout of the source type is not yet supported.\nThe layout of src is unknown\nThe size of src is overflow\nEncountered a type error\nThe source and destination types of a transmutation.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nThe destination type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs an <code>Assume</code> from a given const-<code>Assume</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe source type.\nThe too-large referent of the destination type.\nThe referent of the source type.\nAn instance of a byte is either initialized to a …\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe states in a <code>Nfa</code> represent byte offsets.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA non-deterministic finite automaton (NFA) that represents …\nThe states in a <code>Nfa</code> represent byte offsets.\nThe transitions between states in a <code>Nfa</code> reflect bit …\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nConcatenate two <code>Nfa</code>s.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCompute the union of two <code>Nfa</code>s.\nA visibility node in the layout.\nA reference in the layout.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA choice between alternative layouts.\nA byte node.\nA definition node.\nA reference node.\nA sequence of successive layouts.\nA tree-based representation of a type layout.\nA <code>Tree</code> representing the layout of <code>bool</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nA <code>Tree</code> consisting only of a definition node.\nReturns the argument unchanged.\nA <code>Tree</code> whose layout accepts exactly the given bit pattern.\nConstructs a <code>Tree</code> from an enum.\nConstructs a <code>Tree</code> from a struct.\nConstructs a <code>Tree</code> representing the value of a enum tag.\nConstructs a <code>Tree</code> from a tuple.\nConstructs a <code>Tree</code> from a union.\nConstructs a <code>Tree</code> from a ‘variant-like’ layout.\nCalls <code>U::from(self)</code>.\nProduces <code>true</code> if <code>Tree</code> is an inhabited type; otherwise …\nA <code>Tree</code> whose layout is a number of the given width.\nProduces a new <code>Tree</code> accepting either <code>self</code> or <code>other</code> as …\nA <code>Tree</code> whose layout is entirely padding of the given width.\nRemove all <code>Def</code> nodes, and all branches of the layout for …\nProduces a new <code>Tree</code> where <code>other</code> is sequenced after <code>self</code>.\nA <code>Tree</code> whose layout matches that of a <code>u8</code>.\nA <code>Tree</code> representing an uninhabited type.\nA <code>Tree</code> containing a single, uninitialized byte.\nA <code>Tree</code> representing a zero-sized type.\nThe layout of the type is not yet supported.\nOverflow size\nThis error will be surfaced elsewhere by rustc, so don’t …\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAnswers whether a <code>Dfa</code> is transmutable into another <code>Dfa</code>.\nAnswers whether a <code>Nfa</code> is transmutable into another <code>Nfa</code>.\nAnswers whether a <code>Tree</code> is transmutable into another <code>Tree</code>.\nThis method begins by converting <code>src</code> and <code>dst</code> from <code>Ty</code>s to …\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContext necessary to answer the question “Are these …\nThe source and destination types of a transmutation.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nEquivalent to <code>f(&amp;iter.collect::&lt;Vec&lt;_&gt;&gt;())</code>.\nThe destination type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe source type.")