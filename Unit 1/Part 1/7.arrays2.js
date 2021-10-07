let a = [1,2,3,4];
console.log(a.toString());
a.push(5,6,7);
console.log(a.toString());
a.unshift(-1, 0);
console.log(a.toString());
let borrado = a.shift();
console.log(`He borrado '${borrado}' -> ${a}`);
borrado = a.pop();
console.log(`He borrado '${borrado}' -> ${a}`);

console.log(a.join(' => '));

console.log("--------- CONCAT ----------");
let nums1 = [10, 20, 30];
let nums2 = [40, 50 ,60];
let nums3 = [70, 80];
let nums4 = nums1.concat(nums2, nums3, 90);
console.log(nums4); // [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log("--------- SLICE ----------");
let nums5 = nums4.slice(3, 7);
console.log(nums5); // 40, 50, 60, 70

console.log("--------- SPLICE ----------");
let cosas = ["casa", "coche", "árbol", "moto", "silla"];
let eliminados = cosas.splice(1, 2);
console.log(`Eliminados: ${eliminados}. Cosas: ${cosas}`);
cosas.splice(1, 1, "mesa", "lámpara");
console.log(cosas);

console.log("---------- Sort array --------");
let cosas2 = ["aro", "coches", "árbol", "motosierra", "servilleta"];
console.log(cosas2);
cosas2.reverse();
console.log(cosas2); // ['servilleta', 'motosierra', 'árbol', 'coches', 'aro']
cosas2.sort();
console.log(cosas2); // ['aro', 'coches', 'motosierra', 'servilleta', 'árbol']
cosas2.sort((c1, c2) => c1.localeCompare(c2)); // Compares with current locale (es-ES)
console.log(cosas2); // ['árbol', 'aro', 'coches', 'motosierra', 'servilleta']
cosas2.sort((c1, c2) => c1.length - c2.length); // Order by string length
console.log(cosas2); // ['aro', 'árbol', 'coches', 'motosierra', 'servilleta']


console.log("------ INDEXOF -------");
function numveces(array, buscar) {
    let encontrado = 0;
    let pos = 0;
    while((pos = array.indexOf(buscar, pos)) !== -1) {
        encontrado++;
        pos++;
    }
    return encontrado;
}

let nums6 = [2, 4, 6, 3, 7, 9, 3, 4, 2, 6, 8, 9, 4];

console.log(`Número 4 encontrado ${numveces(nums6, 4)} veces`);
console.log(`Número 2 encontrado ${numveces(nums6, 2)} veces`);
console.log(`Número 6 encontrado ${numveces(nums6, 6)} veces`);

console.log("------ EVERY & SOME -------");
let nombres = ["Pedro", "Ana", "Paco", "Sara"];
console.log(nombres.some(n => n.startsWith("A"))); // true
console.log(nombres.every(n => n.length < 6)); // true

console.log("------ MAP -------");
let longNombres = nombres.map(n => n.length);
console.log(longNombres); // [5, 3, 4, 4]
let nombresReves = nombres.map(n => Array.from(n).reverse().join(""));
console.log(nombresReves);

console.log("------ FILTER -------");
let nombresP = nombres.filter(n => n.startsWith("P"));
console.log(nombresP); // ['Pedro', 'Paco']

console.log("------ REDUCE -------");
let nums7 = [2, 4, 9, 7, 3, 12, 1, 5];
console.log(nums7.reduce((total, n) => total + n, 0)); // 43
let max = nums7.reduce((max, n) => Math.max(max, n));
console.log(max);

console.log("------ FIND -------");
let nombreS = nombres.find(n => n.startsWith("S"));
console.log(nombreS);
