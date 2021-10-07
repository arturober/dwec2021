let n = 4.238235235;
console.log(n.toFixed(2)); // 4.24

let valor;
console.log(valor); // undefined
console.log(typeof valor); // undefined

valor = null;
console.log(valor);
console.log(typeof valor);

console.log(null == undefined);
console.log(null === undefined);

console.log("------ CONVERSIÓN DE TIPOS ------");
// A booleano

let n2 = 0;
let n3 = 4;
console.log(Boolean(n2)); // false
console.log(!!n2); // false
console.log(!!n3); // true

// A number

let numStr = "34";
let numStr2 = "54";
console.log(numStr + numStr2); // 3454
console.log(Number(numStr) + Number(numStr2)); // 88
console.log(+numStr + +numStr2); // 88

// A string

let n4 = 10;
let n5 = 20;
console.log(String(n4) + String(n5)); // 1020
console.log("" + n4 + n5); // 1020

//---------------------

let nombre = "Pepe";
console.log(`Hola ${nombre}
qué tal estás?
Yo muy bien`);

function saluda(nombre) {
    if(!nombre) {
        console.error("No has pasado ningún nombre...");     
    } else {
        console.log(`Hello ${nombre}`);
    }
}

saluda("");
saluda("Pepito");
