# rustc-tools-example

Example for [rustc-tools crate](https://github.com/GuillaumeGomez/rustc-tools)
using cargo.

This is an example project on how to use and distribute your own linter.

Currently, because of limitations around `librustc_driver`, unless you use
the exact same rustc as the one used to compile the linter, it'll fail at
runtime saying that it doesn't find `librustc_driver.so`. To go around that,
we need to write two cargo binaries:

 * One which will run the lints.
 * The other which will run `cargo +[version] linter` to ensure the linter
   is called with the right rustc binary.

So in short, we install `cargo-tools-inner` with:

```
cd cargo-tools-inner
cargo install --path .
```

And then we install `cargo-tools` with:

```
cargo install --path ../cargo-tools
```

And now you can run `cargo tools` on any crate you want!
