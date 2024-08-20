import * as $ from "../src/index.js";

const xnode = $.construct($.xmlclass, `
<?xml version="1.0"?>
<a:data xmlns:a="a" val="10">
    <a:item/>
</a:data>
`);

const a_ns = $.construct($.namespaceclass, "a", "a");

const datael = $.getproperty($.getproperty(xnode, a_ns, "data"), null, 0);
console.log("<a:data/>.nodeKind() =", $.callproperty(datael, null, "nodeKind"));
console.log("<a:data/>.@val =", $.getattribute(datael, null, "val"));