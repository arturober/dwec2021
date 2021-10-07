let a = [1,2,3,4];
let a2 = a; // Copiar -> new Array(a)
a2[0] = 99;
console.log(a.toString()); // 99, 2, 3, 4

function prueba(array) {
    array[0]++;
}

prueba(a);
console.log(a.toString());

let a3 = [1,2,3,4,5,6];
a3.length = 2;
console.log(a3.toString()); // 1,2
a3.length = 6;
console.log(a3.toString()); // 1,2,,,,

let cosas = ["casa", "barco", "árbol", "coche"];
console.log("------ FOR IN -------");
for(let i in cosas) {
    console.log(`${i} -> ${cosas[i]}`);
}

console.log("------ FOR OF -------");
for(let cosa of cosas) { // ForEach
    console.log(cosa);
}

console.log("------ .forEach -------");
cosas.forEach((cosa, i) => console.log(`${i} -> ${cosa}`));

let producto = {
    nombre: "Silla",
    precio: 32.43,
    stock: 4
};

console.log("------ FOR IN (objeto) -------");
for(let prop in producto) {
    console.log(`${prop} -> ${producto[prop]}`);
}
