```as3
package me.tony.myComps
{
    [SkinState(name="normal", property="normalState")]
    [SkinState(name="hover", property="hoverState")]
    public class Button extends UIComponent
    {
        public function get normalState():Boolean { /* code */ }

        public function get hoverState():Boolean { /* code */ }
    }
}
```

- In UIComponents, `color` shall be expressed as a String, consisting of a CSS color string.
- Style properties shall be marked with the `[Style]` meta-data (e.g., `background`, `border`, and so on), so ASDoc will be able to categorize properties better.