# MXML and CSS

MXML is transformed into an ActionScript 3 tree, sharing same locations as the MXML code, and certain parts are generated later inside a `DirectiveInjectionNode` (like the contents of the constructor code).

- Metadata for instance is parsed inside `<w:Metadata>` and contributed to the ActionScript 3 tree.

CSS is mutually verified and transformed into ActionCore code directly, since CSS doesn't define entities that are part of ActionScript 3. For themes, linking a CSS file will contribute an override to `applyCSSRules()` containing that ActionCore code.