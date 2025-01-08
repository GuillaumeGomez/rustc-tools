Because docs can't be built on docs.rs because we can't pick which nightly to use, docs need
to be built manually.

And finally, since it's nice to be able to have access to rustc's docs corresponding to the
version of this crate, we also need to generate rustc's docs.

First, we document the current crate:

```
cargo doc --no-deps
```

Then we document rustc's. First, we need to get the current commit:

```
$ rustup show
default host: x86_64-unknown-linux-gnu
rustup home:  /.rustup

installed toolchains
--------------------

nightly-2024-10-11-x86_64-unknown-linux-gnu

active toolchain
----------------

nightly-2024-10-11-x86_64-unknown-linux-gnu (overridden by '/rustc-tools/rust-toolchain')
rustc 1.83.0-nightly (52fd99839 2024-10-10)
```

In here it's `52fd99839`. Then we clone the rust repository somewhere else:

```
git clone https://github.com/rust-lang/rust/
```

We go back to the commit:

```
git reset --hard 52fd99839
```

And finally we document rustc (will take a few minutes):

```
./x.py doc compiler/ --stage 1
```

You can limit the number of parallel jobs with `-j` (for example `-j8`).

Now that all docs are generated, time to copy them to the `gh-pages` branch of this repository.
First we go back to `rustc-tools` folder and then (replace `0.83` with the current version):

```
git checkout origin/gh-pages
target/doc/ 0.83
mkdir compiler/0.83
cp -r [rust repository]/build/[ARCH]/compiler-doc compiler/0.83/doc
```

Then update `README.md` to add links to new docs, commit and push.
