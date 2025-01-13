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

## JSON API changes

- [ ] A new JSON method `JSON.parseAs(data, classObject)` should be added.
  - [ ] Handle `Array`, `Vector`, tuples and `Map.<K, V>`
- [ ] `JSON.stringify()` should accept in addition class objects observing for the `Serialization` meta-data.
  - [ ] Handle `Array`, `Vector`, tuples and `Map.<K, V>`

## Document and define it

- [ ] Document it in the developer portal
- [ ] Define the new APIs in whacklib

## Add a new Reflect static class

- [ ] Implemented

### Reflect.parameterizedType()

- [ ] Implemented

Return applied type's composition. (`null` or `{ original, arguments }`) This only detects `Array.<T>`, `Vector.<T>` and `Map.<K, V>`.

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

## SDK

- [x] (SDK) Change the base class of tuple types to be `Object`.

## ActionCore: constructor

- [ ] Now, the first element of an instance Array may not only be a Class, but may also be a tuple type or an special type after substitution (`Array.<T>`, `Vector.<T>` or `Map.<K, V>`, with optional `specialiseditems` and `specialctor` fields). Handle that everywhere, including property accessors.
  - In general, replace `instanceof Class` checks by `instanceof ActionCoreType`
  - Replace some type tests by `istypeinstantiatedfrom(type, fromType)`
  - [x] `inobject()`
  - [x] `hasownproperty()`
  - [ ] `nameiterator()` (replace `Dictionary` by `Map.<K,V>` and update `Vector` specializations as well)
  - [ ] `valueiterator()` (replace `Dictionary` by `Map.<K,V>` and update `Vector` specializations as well)
  - [ ] `getdescendants()`
  - [ ] `hasmethod()`
  - [ ] `ecmatypeof()`
  - [ ] `getproperty()`
  - [ ] `setproperty()`
  - [ ] `deleteproperty()`
  - [ ] `callproperty()`
  - [ ] `preincreaseproperty()`
  - [ ] `postincreaseproperty()`
  - [ ] `call()` (must throw a error for tuple types and `SpecialTypeAfterSub`)
  - [ ] `istype()`
  - [ ] `issubtype()`
  - [ ] `coerce()`
  - [ ] `construct()` (consider `specialisedctor` for `SpecialTypeAfterSub`)
    - [ ] Do not allow constructing Array, Vector and Map without type argumentation
  - [ ] `tostring()`
  - [ ] `reflectclass()`

## Tuple types

Tuple should not be equivalent to an `Array` object anymore. It should be real in ActionCore, and codegen will have to be aware of this.

- [x] (ActionCore) Implement the tuple type into ActionCore (extends `ActionCoreType` and interning).
- [x] (SDK) Edit the `verifier` documentation wherever mentions that they are erased into `Array`. That is not going to be the case anymore.

## Make Array final

- [x] In ActionCore
- [x] In whacklib

## Class object

- [x] (ActionCore) Now, the type that a `Class` object references may also be a tuple type or a `SpecialTypeAfterSub`.

## Special type after substitution

This kind of type is used for representing `Array.<T>`, `Vector.<T>` and `Map.<K, V>` substitutions.

- [x] (ActionCore) Implement `SpecialTypeAfterSub`
- [x] (ActionCore) `applytype(original, argumentslist)` function (and add it to `templates/importactioncore.js`). Perform interning too.

## Parameterized types updates

- [x] (SDK) Edit the `verifier` documentation wherever mentions that parameterized types are erased. Indicate that not only `Vector.<T>` is real, but also `Array.<T>` and `Map.<K, V>`.

## Array and Vector

- [x] (ActionCore) Read the element type from the constructor to turn the array/vector safe in all operations (including property accessors and their methods).
- [x] (ActionCore) Array and Vector will need some internal constructor usage changes (e.g. watch out for any `[arrayclass, ...]` or `[vectorclass, ...]` stuff and replace their first element to an applied type)
  - [x] Vector
  - [x] Numeric vector (vectordoubleclass, vectorfloatclass, vectorintclass, vectoruintclass)
  - [x] Array

## Vector optimizations

- [x] (ActionCore) Vector implementation as an applied type should use specialized implementations based on the element type. (int, uint, Number, float = use their specialization; for anything else, use the more polymorphic implementation.) They are already done, except they now need to fit with the new `SpecialTypeAfterSub` model; just set `specialisedecmaprototype`, `specialisedctor` and `specialiseditems` over `applytype(vectorclass, [t])`.

## whack.utils.Dictionary should turn into Map.\<K, V>

- [x] (ActionCore) Set `final: true` in the `Map` class options
- [x] (whacklib) Add `final` modifier to the `Map` class
- [ ] (ActionCore) Read the key-value types from the constructor to turn all Map operations safe.
- [x] (ActionCore) Update `templates/importactioncore.js` to export the `Map` type correctly (and remove `Dictionary`).
- [x] (Documentation) Update the developer portal to mention `Map.<K, V>`, and not `whack.utils.Dictionary`.
- [x] (SDK) Update references to `Dictionary`, replacing it by `Map.<K, V>`.

## describeType()

- [ ] (ActionCore) Update `describeType()` implementation to handle `SpecialTypeAfterSub` and tuple types.

## trace()

- [ ] (whacklib) Enhance debugging by converting class objects into JSON and then using `JSON.parse` from JavaScript.