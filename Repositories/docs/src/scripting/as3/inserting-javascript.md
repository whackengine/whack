# Inserting JavaScript

ActionScript is converted into JavaScript code during compilation step in a hybrid manner, where it is allowed for specific JavaScript code to be inserted in a closure call. The target audience for this section are third party library developers.

The following example invokes a JavaScript closure by passing a string parameter to it and assigning its resulting object into a variable:

```
import flex.externals.js.iifee;

var msg:String = "Hello, world!";

// Immediately invoked function expression
var obj:* = flex.externals.js.iife(<![CDATA[
    alert(msg);
    return {x: 0, y: 0};
]]>, msg);

trace(obj.x, obj.y);
// 0  0
```

The following example accesses the global `Math` object:

```
import flex.externals.js.lex;
trace(flex.externals.js.lex("Math").random());
```

The following snippet accesses a property using common JavaScript operators:

```
import flex.externals.js.get;
import flex.externals.js.set;

// get
const $ = flex.externals.js.get(o, k);
// set
flex.externals.js.set(o, k, v);

flex.externals.js.callkey(o, k, arg1, arg2);
```

The following snippet results into the JavaScript `new` operator:

```
import flex.externals.js.construct;
construct(o, arg1, arg2);
```

## JavaScript environment

The JavaScript host environment is expected to be either a W3C compatible environment or a Node.js compatible environment.

The JavaScript environment is cluttered with several classes, constants, and methods from the [ActionCore](https://github.com/hydroperflex/actioncore) library as well as linked libraries. They are lexically available as that allows for name mangling in release builds of a Flex application.

There are two special ActionScript configuration constants `ENV::W3C` and `ENV::NODE`, which are each set to either false or true, which indicate the web browser and Node.js platforms respectively.

```
trace("browser:", ENV::W3C ? "in browser" : "not in browser");
trace("node", ENV::NODE ? "in node" : "not in node");
```

## Importing a JavaScript file

The Flex manifest may specify multiple `[[js]]` sections linking a JavaScript file to be imported before the ActionScript environment.

```toml
[[js]]
path = "pixi.min.js"
import-declaration = 'import * as PIXI from "pixi.js";'
```