# cargo-tools

Wrapper for `cargo-tools-inner`. This binary simply calls
`cargo +toolchain tools-inner` (with the args provided to the `cargo` command).

It is highly recommended to use it instead of running `cargo-tools-inner`
directly.
