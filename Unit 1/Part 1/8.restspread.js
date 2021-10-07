function suma(...numeros) {
    console.log(`He recibido ${numeros.length} valores: ${numeros}`);
    return numeros.reduce((t,n) => t + n, 0);
}

console.log(suma());
console.log(suma(3, 5));
console.log(suma(3, 5, 7, 8, 4));

let nums = [23, 14, 6, 14, 37, 23, 17];
console.log(Math.max(...nums));

let n1 = [1,2,3];
let n2 = [4,5,6];
let n3 = [...n1, ...n2, 7, 8];
console.log(n3);

function suma2Primeros([n1 = 0, n2 = 0]) {
    return n1 + n2;
}

console.log(suma2Primeros([3, 5, 2, 7]));
console.log(suma2Primeros([3]));
console.log(suma2Primeros([]));