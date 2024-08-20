import * as $ from "../src/index.js";

const xnode = $.construct($.xmlclass, `
<?xml version="1.0"?>
<a:data xmlns="a" val="10">
    <a:item/>
</a:data>
`);

const a_ns = $.construct($.namespaceclass, "a", "a");

const datael = $.getproperty($.getproperty(xnode, a_ns, "data"), null, 0);
console.log(datael)
console.log($.getattribute(datael, null, "val"));