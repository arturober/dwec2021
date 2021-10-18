console.log("------- Collator -------");
let a = ["adiós", "árbol", "oído", "óptimo", "ñapa", "niño"];
a.sort();
console.log(a.toString()); // adiós,niño,oído,árbol,ñapa,óptimo (english sorting)
a.sort(new Intl.Collator("es").compare);
console.log(a.toString()); // adiós,árbol,niño,ñapa,oído,óptimo (spanish sorting)
//a.sort((s1,s2) => s1.localeCompare(s2)); // This one also works

console.log("------- Listformat -------");
let a2 = ["perro", "gato", "pez", "loro"];
console.log(a2.toString());
const formatter = new Intl.ListFormat("es", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(a2)); // perro, gato, pez y loro
const formatter2 = new Intl.ListFormat("es", {
  style: "long",
  type: "disjunction",
});
console.log(formatter2.format(a2)); // perro, gato, pez o loro
const formatter3 = new Intl.ListFormat("es", { style: "short", type: "unit" });
console.log(formatter3.format(a2)); // perro, gato, pez, loro

console.log("------- Numberformat ------");
let number = 15300.9555;
console.log(new Intl.NumberFormat("en-UK").format(number)); // 15,300.956
console.log(new Intl.NumberFormat("es-ES").format(number)); // 15.300,956
console.log(
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(
    number
  )
);
// 15.300,96 €
console.log(
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    number
  )
);
// $15,300.96

console.log("------ Datetimeformat -------");
let date = new Date("2022-04-25");
console.log(new Intl.DateTimeFormat("es-ES").format(date)); // 25/4/2022 (default)
console.log(
  new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
  }).format(date)
); // 25/4/22
console.log(
  new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
  }).format(date)
); // lunes, 25 de abril de 2022
console.log(
  new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
); // 25/04/2022
console.log(
  new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
  }).format(date)
); // 25 de abril de 2022 2:00 de la madrugada