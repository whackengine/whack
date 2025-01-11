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

### Reflect.superType()

### Reflect.propertyType()

This will return the static type of an object's property. For structural types it should return a base class
(`Function` for function types; `Array` for tuples; `Object` for nullable and non-nullable types;);

## Apply type (ActionCore)

## Parameterized types (codegen)

## Vector (ActionCore)

- Store element type as a internal field to turn the vector safe.

## whack.utils.Dictionary turns into Map.\<K, V>
