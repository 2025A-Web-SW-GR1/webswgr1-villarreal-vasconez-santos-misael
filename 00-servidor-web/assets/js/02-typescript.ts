console.log("Hola Typescript");

let nombres = "Santos";
nombres = "A";
nombres = "b";
//nombres = 1;
let nombreTS: string = "";
console.log(typeof nombres, "nombres");

let numeros = 1;
numeros = 2;
let numeroTS: number = 1;
console.log(typeof numeros, "numeros");

console.log(typeof numeros, "numeros decimales");


let booleanos = true;
booleanos = false;
let booleanTS: boolean = true;
console.log(typeof booleanos, "booleanos");


let nulos = null;
nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number>[] = [];
console.log(typeof arreglos, "arreglos");

let objectos = {};
let objetosTS: object = {};
console.log(typeof objectos, "objetos");

let nodefinidos = undefined;
let nodefinidosTS: undefined = undefined;
console.log(typeof nodefinidos, "undefined");

// Truty / Falsy

let trutyFalsy: any;
trutyFalsy = "";
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}

trutyFalsy = "a";
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}

trutyFalsy = 0;
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}
trutyFalsy = 1;
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}

trutyFalsy = null;
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}

trutyFalsy = [];
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}

trutyFalsy = {};
if (trutyFalsy) {
    console.log("Truty")
} else {
    console.log("Falsy")
}





