package
{
    import fx.externals.js.lex;

    [FLEX::EXTERNAL]
    public namespace AS3 = "http://hydroper.com/AS3/2024/builtin";

    [FLEX::EXTERNAL]
    public const undefined: * = void 0;

    [FLEX::EXTERNAL]
    public const NaN: Number = 0 / 0;

    [FLEX::EXTERNAL]
    public const Infinity: Number = 1 / 0;

    /**
     * Logs the specified values to the console.
     */
    public function trace(...values : [*]):void
    {
        fx.externals.js.lex("console").log(values.join("  "));
    }

    public function decodeURI(str:String):String
    {
        return fx.externals.js.lex("decodeURI")(str);
    }

    public function decodeURIComponent(str:String):String
    {
        return fx.externals.js.lex("decodeURIComponent")(str);
    }

    public function encodeURI(str:String):String
    {
        return fx.externals.js.lex("encodeURI")(str);
    }

    public function encodeURIComponent(str:String):String
    {
        return fx.externals.js.lex("encodeURIComponent")(str);
    }

    public function isFinite(val:Number):Boolean
    {
        return fx.externals.js.lex("isFinite")(val);
    }

    public function isNaN(val:Number):Boolean
    {
        return fx.externals.js.lex("isNaN")(val);
 
    }

    [FLEX::EXTERNAL]
    public native function isXMLName(str:String):Boolean;

    public function parseFloat(str:String):Number
    {
        return fx.externals.js.lex("parseFloat")(str);
    }

    public function parseInt(str:String, radix:uint = 0):Number
    {
        return fx.externals.js.lex("parseInt")(str, radix);
    }
}