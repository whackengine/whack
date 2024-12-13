# TODO: AMF

## How it looks like

Tag:

(Note: `Serde` should be changed to a nicer name; not sure yet)

```
package demo
{
    [Serde(tag="type")]
    public class Animal
    {
    }

    [Serde(rename="bear")]
    public class Bear extends Animal
    {
        public var anger:Number;
    }
}
```

## Document it

## Remove nullable and non-nullable types completely

They are complicating things in that case. Remove any of them from the documentation as well.

## JSON changes

- Handle 

## whack.utils.parameterizedType()

Handle applied types, returning a composition. (null or { original, arguments })

## whack.utils.superType()

## whack.utils.propertyType()

## Apply type (ActionCore)

## Parameterized types (codegen)

## Vector (ActionCore)

- Store element type as a internal field to turn the vector safe.

## whack.utils.Dictionary > Map.\<K, V>