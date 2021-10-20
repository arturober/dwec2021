function sumaPos(n1, n2) {
    return new Promise((resolve, reject) => {
      if (n1 < 0 || n2 < 0) {
        reject("Numbers can't be negative");
      }
      setTimeout(() => {
        resolve(n1 + n2);
      }, 2000);
    });
  }

let sum1 = sumaPos(-4, 7, 1500);
let sum2 = sumaPos(1, 3, 2500);
let sum3 = sumaPos(7, 8, 4000);
let sum4 = sumaPos(12, 13, 1000);

Promise.all([sum1, sum2, sum3, sum4])
.then((res) => console.log(res));

// Promise.any([sum1, sum2, sum3, sum4])
// .then((res) => console.log(res));