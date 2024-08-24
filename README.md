# Flex

Hydroper Flex allows creation of client and server side software through ActionScript 3 and MXML running over existing JavaScript engines merging the easy method of managing packages as in the Cargo package manager supported by the Rust language.

The compiler is implemented in Rust, while the runtime is implemented in ECMAScript (which is expected to be optimized by V8 and JavaScriptCore engines).

## Where we are

The compiler is in progress. The next implementation would be verifying class definitions. The `todo/tree/directives-list.md` document in the `mxmlc` repository lists what is missing, and `todo/tree/directives.md` contains details about what is further going on.

For Visual Studio Code, the "Save and restore tabs" extension is useful for restoring opened tabs. The `mxmlc` repository contains saved tabs that you can restore with this extension, but it requires changing the paths in `.vscode/save-restore-editors.json` as they are absolute paths.

### Goals

1. MXML compiler (+AS3, -MXML, -CSS3, -Embed meta data, -Bindable meta data, -Stylesheet meta data, -online registry, +package manager, +codegen, +evaluation in browser or command line server)
2. IDE support
3. ASDoc compilation
4. flex.core package including the application, control, layout, event and skinning classes
5. Test it out
6. MXML compiler (+MXML, +CSS3, +Embed meta data, +Bindable meta data, +Stylesheet meta data)
7. Test it out
8. MXML compiler (+online registry)
9. Test online registry

Notes:

- "+" means included
- "-" means excluded