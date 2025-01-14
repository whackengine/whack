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
    - Currently implementing `mapParsedIntoType`.
- [ ] `JSON.stringify()` should accept in addition class objects observing for the `Serialization` meta-data.
  - [ ] Handle `Array`, `Vector`, tuples and `Map.<K, V>`

## Document and define it

- [ ] Document it in the developer portal
- [ ] Define the new APIs in whacklib

## Add a new Reflect static class

- [x] Implemented