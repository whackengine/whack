# MXML and CSS

MXML is transformed into an ActionScript 3 tree, and certain parts are generated later inside a `DirectiveInjectionNode` (like the contents of the constructor code).

CSS is mutually verified and transformed into ActionCore code directly. For themes, linking a CSS file will contribute an override to `applyCSSRules()` containing that ActionCore code.