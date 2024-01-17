To update documentation:

```
git checkout master
cargo clean
cargo rustdoc -- -Zunstable-options --generate-link-to-definition
git checkout gh-pages
cp -r target/doc/* 0.3/
```

Then commit and push to the `gh-pages` remote branch.
