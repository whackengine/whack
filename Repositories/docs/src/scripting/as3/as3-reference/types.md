# Types

ActionScript defines three minimum types: `void`, `null`, and `Object`, of which only `void` and `Object` and its infinite subclasses are expressed by the user.

## Void type

The `void` type consists of the `undefined` value.

## Null type

The `null` type consists of the `null` value, although no type annotation is allowed to use the `null` type.

## Object type

The `Object` type represents objects containing properties in different forms.

### Nullability

`Object` may be the `null` value, except its subclasses `Number`, `float`, `int`, `uint` and `Boolean`.

`Object` may be the `undefined` value, except all of its subclasses.

## Primitive types

The types `Number`, `int`, `uint`, `float`, `Boolean` and `String` are final subclasses of `Object` that are considered primitive types.

| Type           | Description |
| -------------- | ----------- |
| `Number`       | IEEE 754 double precision floating point. Includes `NaN`, `+Infinity` and `-Infinity`. |
| `float`        | IEEE 754 single precision floating point. Includes `NaN`, `+Infinity` and `-Infinity`. |
| `int`          | Signed 32 bit integer |
| `uint`         | Unsigned 32 bit integer |
| `Boolean`      | Boolean that is `false` or `true` |
| `String`       | String consisting of UTF-16 code units |

## Array type

The `Array.<T>` type, also expressed as `[T]`, is an unoptimized insertion-order collection of values. Indices are zero based.

The following program demonstrates using the `Array` type:

```
const list : [Number] = [10, 5];

// add a new element equivalent to first value + second value
list.push(list[0] + list[1]);

trace("length:", list.length, "third value:", list[2]);
trace("enumerating values...");

for each (var val:Number in list)
{
    trace("-", val);
}
```

The program log should be:

```
length: 3  third value: 15
enumerating values...
-  10
-  5
-  15
```

## Vector type

The `Vector.<T>` type is an optimized insertion-order collection of values that is used similiarly to `Array`.

For numbers where `T` is one of the numeric types, the `Vector` class is represented more efficiently compared to `Array`.

The following program demonstrates general usage of `Vector`:

```
const vector:Vector.<Number> = new <Number> [ 10, 5 ];

// populate that Vector with more elements
for (var i:int = 1, j:int = 0; i <= 10; i++, j = ++j % 2)
{
    vector.push(vector[j] * i);
}

trace("enumerating values...");

for each (var val:Number in vector)
{
    trace(val);
}
```

## Tuple type

The tuple type, expressed as two or more types between brackets, as in `[Boolean, String]`, is a compile time type that is equivalent to `Array`, performing checks ahead of time for ensuring that the array consists of a certain sequence of elements of a specific type.

The tuple type is useful for example when a function returns multiple values:

```
function process(data:String):[Boolean, String]
{
    trace("processing...");
    var successful = true;
    var output = data.charAt(0);
    return [successful, output];
}
```

## Function type

The `Function` type represents a function or a bound method that you may call in ActionScript.

In addition, a compile time type over `Function` allows you to ensure a function takes a specific sequence of parameters and that it returns a specific type:

```
type TakeRest = function(...[String]):void;
type TakeOptBoolean = function(Boolean=):void;
type TakeInt = function(int):void;
```

## Namespace type

The `Namespace` type is used both for representing ActionScript 3 namespaces and XML namespaces.

## Nullable type

The nullable type `T?` or `?T` is a compile time type enforcing that a type contains `null`. Note that almost all types contain `null` already.

## Non nullable type

The non nullable type `T!` is a compile time ensuring that a type does not contain `null`.

## Dictionary type

The `flex.utils.Dictionary` type is a flexible mapping of arbitrary key-value pairs, where the user may access these pairs using common property operators.

The `Dictionary` type is safe to use when it comes to solving name ambiguity:

- Reading, writing or deleting a property from a `Dictionary` object will always access key-value pair data of the Dictionary.
- Calling a property within a `Dictionary` object will call a method defined by the Dictionary class.

The following program demonstrates the effects of using `Dictionary`:

```
import flex.utils.Dictionary;

const dict = new Dictionary();
dict.x = 10;
trace(dict.length()); // 1

dict.length = 0;
trace(dict.length()) // 2;

for (var k in dict)
{
    trace(k);
}
// "x"
// "length"

for each (var v in dict)
{
    trace(v);
}
// 10
// 0

delete dict.length;

dict.m = function(a:Number):* (a * 10);
trace(dict.call("m", 10)); // 100
```