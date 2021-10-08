let date = new Date();
let day = date.getDate().toString().padStart(2, "0");
let month = (date.getMonth() + 1).toString().padStart(2, "0");
console.log(`${day}/${month}/${date.getFullYear()}`);