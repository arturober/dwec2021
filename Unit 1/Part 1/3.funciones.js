function suma (n1, n2) {
    return n1 + n2;
}

console.log(suma(3, 5));

let suma2 = function (n1, n2) {
    return n1 + n2;
};

console.log(suma2(3, 5));
console.log(typeof suma); // function
console.log(typeof suma2); // function

function operar(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(operar(4, 5, suma)); // 9
console.log(operar(6, 4, function(n1, n2) {
    return n1 - n2;
})); // 2
console.log(operar(3, 5, (n1, n2) => n1 * n2)); // 15

let saluda = (nombre = 'Anónimo') => console.log(`Hola ${nombre}`);


console.log(suma(3, 4, 5, 6, 7, 8, 9)); // 7 (3+4)
console.log(suma()); // NaN
saluda(); // Hola Anónimo
saluda("Pepito"); // Hola Pepito


