UIComponent < Node

Constructor: UIComponent(tag:String = “div”)

UI components

- UI components map to native HTML elements, even though skinning uses browser’s inline CSS styling and not global style sheets, relying on DOM events to determine states such as hovering, pressure and focusability.

Skinning the text selection

- Text selection is skinned through an auto managed CSS style block that uses an unique auto-generated class name for the text input.

Skinning the scroll bar

- That is handled similarly to text selection.

Themes and skin rendering

- Skin rendering occurs every frame, allowing for complex selectors in CSS rules. (That means no browser native’s :hover or :focus is used for example. Auto managed browser CSS style blocks are only used for text selection and scroll bar.)