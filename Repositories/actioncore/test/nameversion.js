import * as ac from "../src/index.js";

let $publicns = ac.packagens("com.hydroper.actioncore.test");

const Portuguese_ns = new ac.Userns("http://linguagem.br");

const speakerclass = ac.defineclass(ac.name($publicns, "Speaker"),
{
    ctor(name)
    {
        ac.setproperty(this, null, "name", name);
    }
},
[
    [ac.name($publicns, "name"), ac.variable({
        type: ac.stringclass,
    })],
    [ac.name($publicns, "speak"), ac.method({
        exec()
        {
            return "Hello! My name is " + ac.getproperty(this, null, "name") + ".";
        },
    })],
    [ac.name(Portuguese_ns, "speak"), ac.method({
        exec()
        {
            return "Olá! Meu nome é " + ac.getproperty(this, null, "name") + ".";
        },
    })],
]);

const speaker = ac.construct(speakerclass, "Speaker");
console.log("Speaker#speak() = " + ac.callproperty(speaker, null, "speak"));
console.log("Speaker#Portuguese::speak() = " + ac.callproperty(speaker, Portuguese_ns, "speak"));