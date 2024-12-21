# cargo-tools-inner

This is the part containing the actual lint code. Once installed, you can
run it with `cargo +TOOLCHAIN tools-inner` where `TOOLCHAIN` is the `channel`
value of the `rust-toolchain` file. However, it's highly encouraged to
instead install `cargo-tools` so you can then run `cargo tools`. No need
to care about the `+TOOLCHAIN` anymore.
