# Property access

## Instance methods

Instance methods shall have a special local that implements the "dynamic dispatch" version of a method that checks for overriding methods.

If an instance method has no overriders, that local will be the method itself, with no additional "dynamic dispatch" overhead.

Where a method is seen ahead of time, it is optimized to call that "local" directly.

## Property accessors

Optimize getters and setters ahead of time similiar to instance methods.

## Length

Optimize access of "length" from String, ByteArray, Array and Vector.\<T>, Vector.\<Number>, Vector.\<float>, Vector.\<int>, and Vector.\<uint>.

## Position

Optimize access of "position" from ByteArray.

## Element read

Optimize read access of Array elements.

## Element write

Optimize write access of Array elements.
