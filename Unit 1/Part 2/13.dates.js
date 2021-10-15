let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let days = ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let now = new Date();
let day = now.getDate().toString().padStart(2, "0");
let month = (now.getMonth() + 1).toString().padStart(2, "0");
console.log(`${day}/${month}/${now.getFullYear()}`);

console.log(`${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]} de ${now.getFullYear()}`);