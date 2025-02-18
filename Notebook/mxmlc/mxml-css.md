# MXML and CSS

MXML is transformed into an ActionScript 3 tree, sharing same locations as the MXML code, and certain parts are generated later inside a `DirectiveInjectionNode` (like the contents of the constructor code).

- Metadata for instance is parsed inside `<w:Metadata>` and contributed to the ActionScript 3 tree.

CSS is verified and transformed into ActionCore code more later, since CSS doesn't define entities that are part of ActionScript 3 at all. For themes, linking CSS will contribute an override to `render()` containing that ActionCore code (it semantically adds an override in the MXMLSemantics database as well with a "native" method). Themes also override `order():[Theme]` from the `Theme` class.