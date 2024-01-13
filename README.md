# rustc-tools

Some internal rustc tools made accessible (by wrapping the setup part away).

## Why would I need this crate?

If you need to write a Rust compiler plugin (`clippy` and `rustdoc` are good examples of what a rustc plugin can achieve), a lot of setup is required to be able to use its APIs. This crate aims at removing this pain point so you can spend more time working on the plugin instead.

## How to use it?

Since it provides and uses `rustc` API, it only works on a very specific nightly version of the Rust compiler. Copy the `rust-toolchain` file into your project.

Another thing required: you need to add `#![feature(rustc_private)` in your crate to be able to use `rustc_tools`.

Once done, that's it!

## Global explanations

In the Rust compiler, there are multiple levels to handle APIs. The lower you go, the more information you have. What follows are very simplified explanations:

First, you have the `lexer`. It is an iterator which goes through a string (a source code file) and tries to parse it as Rust code. It doesn't do anything else like trying to follow module declarations or anything, it just generates syntax information.

Then, you have the `ast` which gives more information about what you're reading and classifies it. For example, you don't have just tokens anymore but *items*. At this level, you can start using visitors as you already have some nice information like attributes, visibility, etc. Take a look at `examples/ast.rs` to see an example.

The final level covered by this crate is `HIR` (for High-level Intermediate Representation). You get it after macro expansion and name resolution. It is made to be a compiler-friendly AST. As such, you can start using the internal Rust compiler query system with it.

If you want more information about all this, I strongly recommend you to go read the [rustc dev guide](https://rustc-dev-guide.rust-lang.org/) and to take a look at the [compiler documentation](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/index.html) (and in particular the [`TyCtxt`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.TyCtxt.html) and [`Map`](https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/hir/map/struct.Map.html) types, both of which are at the center of the `HIR` level).

## Running examples

There are a few examples available in the `examples` folder. To run them:

```bash
$ cargo run --example ast -- asset/example_file.rs
$ cargo run --example hir -- asset/example_file.rs
$ cargo run --example lint -- asset/example_file.rs
```

A more complete example with cargo integration is available [here](https://github.com/GuillaumeGomez/rustc-tools-example).
