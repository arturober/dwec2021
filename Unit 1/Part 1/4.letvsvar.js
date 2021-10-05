"use strict";

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i); // 10 (MAL)

// if(1 === 1) {
//     var a = "hola";
// }
// console.log(a); // hola (MAL)

// Probar con var
for(let i = 1; i <= 10; i++) {
    let p = document.createElement('p');
    p.append(`Párrafo ${i}`);
    p.addEventListener("click", e => console.log(`Click en párrafo ${i}`));
    document.body.append(p);
}
