- Considering for instance that Button has “skin”, there ought to be a property meta-data (`[SkinProperty]`) that defines CSS “background, border, outline” properties: skin=”true” indicates background, border and outline properties are set based in the `Skin` object.

```as3
package me.tony.myComps
{
    [SkinState(name="normal", property="normalState")]
    [SkinState(name="hover", property="hoverState")]
    public class Button extends UIComponent
    {
        [SkinProperty(skin="true")]
        public function get skin():Skin { /* code */ }

        public function set skin(value:Skin):void { /* code */ }

        public function get normalState():Boolean { /* code */ }

        public function get hoverState():Boolean { /* code */ }
    }
}
```

- In UIComponents, `color` shall be expressed as a String, consisting of a CSS color string.