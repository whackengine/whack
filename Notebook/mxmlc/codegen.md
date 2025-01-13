# Codegen

## ECMAScript linking

The ECMAScript module output consists of:

* Copies of libraries linked in the manifest `js` section.
* An entry point that imports, in order: 1) linked libraries, and 2) WhackCore.

In a release build, the entry point, together with the linked libraries, is bundled into a minified JavaScript IIFE (immediately invoked function expression) where all local ECMAScript names are shortened through the NPM packages `rollup` and `@rollup/plugin-terser`.

## Definition optimizations

When defining entities such as classes and methods, cache the involved namespaces right before the definition.

## Parameterized types

All parameterized types, except `Array.<T>`, `Vector.<T>` and `Map.<K, V>`, have their type parameters erased.
`Vector.<T>` for example translates to ActionCore snippet `applytype(vectorclass, [t])`, while an user parameterized type translates to `t` as is.

`Promise.<T>`, although built-in, has its type parameters erased.

## Global names

Intern the local name for a global name into an indice of an unique array of local names. This reduces size of the emitted code.

## typeof

Output `ecmatypeof(v)` instead of `typeof v`.

## Increment/decrement

Increment/decrement in a property must output `pre[increment/decrement]property(obj, qual, name)` or `post[increment|decrement]property(obj, qual, name)` with an `increaseVal` of either +1 or -1.

For global properties use `pre[increment|decrement]global(ns, name)` and `post[increment|decrement]global(ns, name)`.

## Try/catch statement

The catch clause must invoke `fromjserror(errorval)` for any parameter.

## Throw statement

The throw statement must invoke `tojserror(errorval)` before passing the error to JavaScript.