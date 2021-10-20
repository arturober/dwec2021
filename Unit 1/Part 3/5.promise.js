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

// The same as the above function
function sumaPos2(n1, n2) {
  if (n1 < 0 || n2 < 0) {
    return Promise.reject("Numbers can't be negative");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, 2000);
  });
}

sumaPos(4, 6)
  .then((res) => console.log(res))
  .catch((error) => console.error("Error: " + error));

console.log("I'm going to add 4 + 6:");

// Sums 2 numbers using sumaPos and adds 1 to the result
function sumaPosPlus1(n1, n2) {
  return sumaPos(n1, n2).then((res) => res + 1);
}

sumaPosPlus1(5, 5).then((res) => console.log(res)); // 11

function sumaTres(n1, n2, n3) {
  return sumaPos(n1, n2).then((res) => sumaPos(res, n3));
}

sumaTres(3, 5, 2)
  .then((res) => console.log(res))
  .catch((error) => console.error("ERROR: " + error))
  .finally(() => console.log("Promise completed!")); // 10
