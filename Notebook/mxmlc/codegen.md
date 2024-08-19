# Codegen

## ECMAScript linking

The ECMAScript module output consists of:

* Copies of libraries linked in the manifest `js` section.
* An entry point that imports, in order: 1) linked libraries, and 2) FlexCore.

In a release build, the entry point, together with the linked libraries, is bundled into a minified JavaScript IIFE (immediately invoked function expression) where all local ECMAScript names are shortened through the NPM packages `rollup` and `@rollup/plugin-terser`.

## Definition optimizations

When defining entities such as classes and methods, cache the involved namespaces right before the definition.

## Global names

Intern the local name for a global name into an indice of an unique array of local names. This reduces size of the emitted code.

## typeof

Output `ecmatypeof(v)` instead of `typeof v`.

## Increment/decrement

Increment/decrement in a property must output `preincreaseproperty(obj, qual, name, increaseVal)` or `postincreaseproperty(obj, qual, name, increaseVal)` with an `increaseVal` of either +1 or -1.

For global properties use `preincreaseglobal(ns, name, increaseVal)` and `postincreaseglobal(ns, name, increaseVal)`.
