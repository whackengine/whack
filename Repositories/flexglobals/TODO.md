# To do

## Packages

### fx.core.\*

(Inside fx.core)

Includes at least the `Application` and `UIComponent` classes.

Mechanisms:

- Register shortcut actions (keyboard and gamepad) in an application, including global shortcut events (such as update, button press, button release) and retrieving button pressure.
- Internationalization in an application, including global language events.

### fx.controls.\*

(Inside fx.core)

For the `new UIComponent()` constructor, throw an `Error` for server side (the Node.js engine).

## fx.layout.\*

(Inside fx.core)

## fx.skins.\*

(Inside fx.skins)

### fx.gfx.\*

(Outside fx.core)

fx.gfx.\* is implemented in an optional package that the user may depend in. It includes:

- The `Canvas` user interface component.
- The `DisplayObject` hierarchy of classes (not the same concept as Flash Display List).