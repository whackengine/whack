# TODO: serialization

Serialization capabilities first focusing in JSON; class serialization in AMF and XML may get in the package registry later.

## How it looks like.

Meta-data here should be similiar to serde from Rust.

Tag:

```
package demo
{
    [Serialization(tag="type")]
    public class Animal
    {
    }

    [Serialization(rename="bear")]
    public class Bear extends Animal
    {
        public var anger:Number;
    }
}
```

> Note that parameterized types may not work as intended on this pattern, except for `Array.<T>`, `Vector.<T>` and `Map.<K, V>`.

> Note that using nullable or non-nullable types may not work as intended on this pattern.

> Note that variables should not hold functions in this pattern.

## JSON API changes

- [ ] A new JSON method `JSON.parseAs(data, classObject)` should be added.
  - [ ] Handle `Array`, `Vector`, tuples and `Map.<K, V>`
- [ ] `JSON.stringify()` should accept in addition class objects observing for the `Serialization` meta-data.
  - [ ] Handle `Array`, `Vector`, tuples and `Map.<K, V>`

## Document and define it

- [ ] Document it in the developer portal
- [ ] Define the new APIs in whacklib

## Add a new Reflect static class

- [x] Implemented

### Reflect.typeArguments()

- [x] Implemented

Return applied type's arguments. (`null` or an array of `Class`) This only detects `Array.<T>`, `Vector.<T>` and `Map.<K, V>`.

### Reflect.lookupMetaData()

- [ ] Implemented

Lookups a type's specific meta-data. (More efficient than `describeType()`.)

### Reflect.variables()

- [ ] Implemented

Returns the `public` variable slots of a type (excluding variables from base types), in the form `[{metadata: [...], name: "propertyName", type: PropertyClass}]`.

### Reflect.isTupleType()

- [ ] Implemented

Returns whether or not a type is a tuple type.

### Reflect.tupleTypeElements()

- [ ] Implemented

Returns the element types of a tuple type.

### Reflect.superType()

- [ ] Implemented

Returns the class that a given class extends.

### Reflect.propertyType()

This will return the static type of an object's property. For few structural types it should return a base class
(`Function` for function types; `Object` for nullable), however nullable types that are equivalent to their inner type (that is, not something like `Number?`, but rather something like `RegExp?`) will return that inner type; non-nullable types will always return their inner type.

## describeType()

- [ ] (ActionCore) Update `describeType()` implementation to handle tuple types.
- [ ] (whacklib) Update the `describeType()` ASDoc to mention tuple types.

## trace()

- [ ] (whacklib) Enhance debugging by converting class objects into JSON and then using `JSON.parse` from JavaScript.
