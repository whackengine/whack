# Type safety

## Codegen

- [ ] Type check given arguments in every activation using ActionCore `coerceorfail()`.
- [ ] Type check the value in each return statement or function's expression body using `coerceorfail()`, in case the value is wildcard or `Object` targeting a known type that is not wildcard or `Object`.