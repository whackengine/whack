# Directives

## Defer

* [ ] Statements are verified only after directives, in two different verification methods (one verification method for directives, and one pass verification method for statements). Block statements, with the right scopes, are entered recursively for directives.
* [ ] Directives are always have a cache to prevent re-verification using the node mapping of SemanticHost; it may just be an invalidation entity when it does not matter, such as for an use namespace directive.
* [ ] When at least one directive throws a defer error, the entire verification should reoccur next time.
* [ ] Addition: the former explanations should be expanded such that deferred verification occurs in compilation unit level.

## Scopes

Set scopes carefully within directive sequences. Sometimes inherit and enter; sometimes just overwrite it.

## Across compilation units

Across all compilation units, directives should be verified first, from a package to a class or method, and from a class to a method or property. After all directives are solved in these ranges, statements may be verified in one pass.

## Directives versus statements

The `DirectiveSubverifier::verify_directive()` method will verify a directive, for certain directives and the block statement, their subdirectives until a limit (for example, from class goes until methods, and from a block statement goes until subdirectives).

* `DirectiveSubverifier::verify_directives` will verify a list of directives and, in case it found any deferred part, it returns `Err` (but all directives are guaranteed to be have been verified).

The `StatementSubverifier::verify_statement()` method will verify a statement or all substatements from a directive such as a class or function definition. It does not throw a defer error; anything that defers will result into a verify error.

* `StatementSubverifier::verify_statements()` will verify a list of statements using `StatementSubverifier::verify_statement()`.

## Variable definitions

Procedure:

* [x] Alpha
* [x] Beta
* [x] Delta
* [x] Epsilon
  * [ ] Handle the `[Bindable]` meta-data for simple identifier patterns
  * [ ] Handle the `[Embed]` meta-data for simple identifier patterns
* [x] Omega

## Inheritance

* [ ] For classes and interfaces, right after the phase in which the inheritance is solved, ensure the inheritance is not circular (an inherited type must not be equals to or a subtype of the inheritor type) by reporting a verify error in such case.
* [ ] For definitions within classes and interfaces, ensure they either override a method or do not redefine a previously defined property.

## Class initialiser method

Note that statements and static binding initializers within a class or enum block contribute code to the class initialiser method of AVM2, so control flow analysis should go from there rather than in the parent's initialiser (i.e. the package or top level).

## Class definitions

* [ ] Assign ASDoc
* [ ] Assign location
* [ ] Read the `[Options]` meta-data and apply `Options` classes restrictions
* [ ] Assign every `[Event]` semantics to the class
* [ ] Handle the `[Bindable]` meta-data right after variables are declared
* [ ] Handle the `[Embed]` meta-data.
* [ ] Assign attributes correctly (`static`, `dynamic`, `abstract`, and `final`)
* [ ] Mark unused

- Remember: `[FLEX::EXTERNAL]` (transitive)

## Interface definitions

* [ ] Assign ASDoc
* [ ] Assign location
* [ ] Assign every `[Event]` semantics to the interface
* [ ] Mark unused
* [ ] For the interface block, verify only top-level function definitions

- Remember: `[FLEX::EXTERNAL]`

## Function definitions

Function definitions should have careful plannings. It involves caching the activation, setting phases (similiarly to destructuring), and avoiding verifying things twice (the signature, that is).

Never ever let getters and setters have the wrong signature assigned to them; if they are invalid, just use a default signature matching their requirements.

Handle conflicting definitions properly, only moving forward in verification if the resulting slot is a method slot and not something else (it could be a variable slot or a class, for example).

- Remember: `[FLEX::EXTERNAL]`
- Remember: do not allow shadowing properties in base classes (`verifier.ensure_not_shadowing_definition(...)`)

### Common function

- [x] 1. Property definition (alpha)
  - [x] Determine whether the function is external (contains `[FLEX::EXTERNAL]` or belongs to an external class) and if it is unallowed to contain a body (in which case it must be `native` or `abstract`).
- [ ] 2. Activation creation and additional verification (beta)
  - [ ] If method is not marked "override"
    - [ ] Do not allow shadowing properties in base classes (`verifier.ensure_not_shadowing_definition(...)`)
  - [ ] Resolve the signature
  - [ ] Create the "this" receiver: either none, inherit "this" type, or create a "this" receiver of the specified type
  - [ ] Define parameter bindings into the activation.
- [ ] 3. If method is marked "override" (delta)
  - [ ] Override method in base class
- [ ] 4. Verify the body (omega)

### Constructor function

- Remember: if the base class contains a non-empty constructor, the subclass's constructor must contain a super statement.

### Getter function

### Setter function

## Getters/setters

Getters and setters have their own method of handling name conflict since they belong to a virtual slot.

- Remember: `[FLEX::EXTERNAL]`
- Remember: do not allow shadowing properties in base classes (`verifier.ensure_not_shadowing_definition(...)`)