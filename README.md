# Verify-version

a customized github action to check if your current version is bumped.

# Usages

## with git tags

the `Verify-version` action will fetch the latest tag via git tool, then compare it with the current version (paramter you inputed).
if inputed current version less than the version parsed form latest tag, you will get a failure.

```yaml
- name: Checkout
  uses: actions/checkout@v2
  with:
    fetch-depth: 0

...

- name: Verify
  uses: devecorsoft/verify-version@v1
  with:
    current: "1.0.5"
```

> :memo: **Note:** keep in mind that this action is working with git tags, so you have to fetch all history for tags with `fetch-depth: 0` when checkout.
