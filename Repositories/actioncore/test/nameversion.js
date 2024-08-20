import * as ac from "../src/index.js";

let $publicns = ac.packagens("com.hydroper.actioncore.test");

const Portuguese_ns = new ac.Userns("http://linguagem.br");

const Speaker_name_idx = 2;
const speakerclass = ac.defineclass(ac.name($publicns, "Speaker"),
{
    ctor(name)
    {
        this[Speaker_name_idx] = ac.tostring(name);
    }
},
[
    [ac.name($publicns, "speak"), ac.method({
        exec()
        {
            return "Hello! My name is " + this[Speaker_name_idx] + ".";
        },
    })],
    [ac.name(Portuguese_ns, "speak"), ac.method({
        exec()
        {
            return "Olá! Meu nome é " + this[Speaker_name_idx] + ".";
        },
    })],
]);

const speaker = ac.construct(speakerclass, "Matheus");
console.log("Speaker#speak() = " + ac.callproperty(speaker, null, "speak"));
console.log("Speaker#Portuguese::speak() = " + ac.callproperty(speaker, Portuguese_ns, "speak"));