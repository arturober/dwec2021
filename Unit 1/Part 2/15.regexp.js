let exp1 = /\b[tc]aza\b/i;
console.log(exp1.test("caza")); // true
console.log(exp1.test("taza")); // true
console.log(exp1.test("maza")); // false
console.log(exp1.test("mostaza")); // false

let exp2 = /(hola|adios) muy buenas/i;
console.log(exp2.test("hola muy buenas")); // true
console.log(exp2.test("adios muy buenas")); // true
console.log(exp2.test("hola que tal")); // false

let regDni = /^\d{8}[A-Z]$/i;
console.log(regDni.test("34563463T"));
console.log(regDni.test("34563464574575473ERTRY"));

let regFecha = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
console.log(regFecha.test("12/12/2020")); // true
console.log(regFecha.test("12/12/20")); // true
console.log(regFecha.test("12/12/201")); // false