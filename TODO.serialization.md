# TODO: serialization

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

- A new JSON method `JSON.parseAs(data, classObject)` should be added.
- `JSON.stringify()` should accept in addition class objects observing for the `Serialization` meta-data. 

## Document and define it

- Document it in the developer portal
- Define the new APIs in whacklib

## Add a new Reflect static class

### Reflect.parameterizedType()

Return applied type's composition. (`null` or `{ original, arguments }`)

### Reflect.tupleTypeElements()

Returns the element types of a tuple type.

### Reflect.superType()

### Reflect.propertyType()

This will return the static type of an object's property. For structural types it should return a base class
(`Function` for function types; `Object` for nullable), however nullable types that are equivalent to their inner type (that is, not something like `Number?`, but rather something like `RegExp?`) will return that inner type; non-nullable types will always return their inner type.

## Tuple type (ActionCore)

Tuple should not be equivalent to an `Array` object anymore. It should be real in ActionCore, and codegen will have to be aware of this.

## Make Array final

- In ActionCore
- In whacklib

## Apply type (ActionCore)

## Parameterized types (codegen)

## Array and Vector (ActionCore)

- Store element type as a internal field to turn the array/vector safe.
- Array and Vector will need some internal constructor usage changes

## whack.utils.Dictionary turns into Map.\<K, V>
