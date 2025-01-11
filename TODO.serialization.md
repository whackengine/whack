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

Return applied type's composition. (`null` or `{ original, arguments }`)

### Reflect.lookupMetaData()

- [ ] Implemented

Lookups a type's specific meta-data. (More efficient than `describeType()`.)

### Reflect.variables()

- [ ] Implemented

Returns the `public` variable slots of a type (excluding variables from base types), in the form `[{name: "propertyName", type: PropertyClass}]`.

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

## ActionCore: constructor

- [ ] Now, the first element of an instance Array may not only be a Class, but may also be a tuple type or an applied type (such as `Vector.<T>` or `Map.<K, V>`). Handle that everywhere, including property accessors.
  - [ ] `inobject()`
  - [ ] `hasownproperty()`
  - [ ] `nameiterator()` (replace `Dictionary` by `Map.<K,V>` and update `Vector` specializations as well)
  - [ ] `valueiterator()` (replace `Dictionary` by `Map.<K,V>` and update `Vector` specializations as well)
  - [ ] `getdescendants()`
  - [ ] `hasmethod()`
  - [ ] `ecmatypeof()`
  - [ ] `getproperty()`
  - [ ] `setproperty()`
  - [ ] `deleteproperty()`
  - [ ] `callproperty()`
  - [ ] `preincrementproperty()`
  - [ ] `predecrementproperty()`
  - [ ] `postincrementproperty()`
  - [ ] `postdecrementproperty()`
  - [ ] `call()` (must throw a error for tuple types and applied types)
  - [ ] `istype()`
  - [ ] `issubtype()`
  - [ ] `coerce()`
  - [ ] `construct()`
  - [ ] `tostring()`
  - [ ] `reflectclass()`

## Tuple types

Tuple should not be equivalent to an `Array` object anymore. It should be real in ActionCore, and codegen will have to be aware of this.

- [ ] (ActionCore) Implement the tuple type into ActionCore and handle it in property accesses and other access functions.
- [ ] (SDK) Edit the `verifier` documentation wherever mentions that they are erased into `Array`. That is not going to be the case anymore.

## Make Array final

- [ ] In ActionCore
- [ ] In whacklib

## Class object

- [ ] (ActionCore) Now, the type that a `Class` object references may also be a tuple type or an applied type.

## Applied types

- [ ] (ActionCore) Implement applied types
- [ ] (ActionCore) Handle applied types in property accesses and other access functions.
- [ ] (ActionCore) Apply type function (and add it to `templates/importactioncore.js`). Perform interning too.

## Parameterized types updates

- [ ] (ActionCore) Now ActionCore's `Class` should support type parameters. Type parameters are not expressed as types through ActionCore except in a polymorphic way in the SDK.
- [ ] (SDK) Edit the `verifier` documentation wherever mentions that parameterized types are erased. That is not going to be the case anymore.

## Array and Vector

- [ ] (ActionCore) Read the element type from the constructor to turn the array/vector safe in all operations (including property accessors and their methods).
- [ ] (ActionCore) Array and Vector will need some internal constructor usage changes (e.g. watch out for any `[arrayclass, ...]` or `[vectorclass, ...]` stuff and replace their first element to an applied type)

## Vector optimizations

- [ ] (ActionCore) Vector implementation as an applied type should use specialized implementations based on the element type. (int, uint, Number, float = use their specialization; for anything else, use the more polymorphic implementation.) They are already done, except they now need to fit with the new applied types model.
- [ ] (ActionCore) Update `templates/importactioncore.js` to export only one `Vector` type (the parameterized one).

## whack.utils.Dictionary should turn into Map.\<K, V>

- [ ] (ActionCore) Read the key-value types from the constructor to turn all Map operations safe.
- [ ] (ActionCore) Update `templates/importactioncore.js` to export the `Map` type correctly (and remove `Dictionary`).
- [ ] (Documentation) Update the developer portal to mention `Map.<K, V>`, and not `whack.utils.Dictionary`.
- [ ] (SDK) Update references to `Dictionary`, replacing it by `Map.<K, V>`.

## describeType()

- [ ] (ActionCore) Update `describeType()` implementation to handle applied types and tuple types.

## trace()

- [ ] (ActionCore) Enhance debugging by converting class objects into JSON and then using `JSON.parse` from JavaScript. For Array and plain objects, stringify them and convert them to JSON from JavaScript. (Probably make `JSON` methods native to ActionCore.)
