# External definitions

- Use `[Flex::External]` in external definitions.
- Use `[Flex::External(slots="NUMBER")]` in an external class to count slots within the instance Array (including `CONSTRUCTOR_INDEX` and `DYNAMIC_PROPERTIES_INDEX` (+2)). (`slots=` is required for classes)

## Particular treatment

- Constants and variables that are external may be initialized to a compile-time constant.
- Every property, method or constructor within an external class or interface are transitively external.
