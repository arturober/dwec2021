setTimeout(() => console.log("Hello world"), 4000);
console.log("Program...");

let num = 1;
// Prints a number and increments it every second
let interval = setInterval(() => {
  console.log(num++);
  if(num > 10) {
      clearInterval(interval);
  }
}, 1000);

