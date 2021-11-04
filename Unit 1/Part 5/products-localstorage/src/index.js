import { SERVER } from "./constants";
import { ProductService } from "./product-service.class";
import Swal from "sweetalert2";
import "../styles.css";
import productTemplate from "../templates/product.handlebars";

let table = null;
let productService = new ProductService();

function addProduct(product) {
  let tr = document.createElement("tr");
  let prodHTML = productTemplate(product);
  tr.innerHTML = prodHTML;
  
  tr.querySelector("button").addEventListener("click", async (e) => {
    await productService.deleteProduct(product);
    tr.remove();
  });

  table.querySelector("tbody").append(tr);
}

async function getProducts() {
  let products = await productService.getProducts();
  Swal.fire("Good job!", "Products loaded successfully!", "success");
  products.forEach((p) => addProduct(p));
}

document.addEventListener("DOMContentLoaded", (e) => {
  table = document.getElementById("table");

  getProducts();
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p = new Person("Pepe", 23);
p.dni = "43543534G";
p.age = "Hola";
p.name = {
  a: 23,
  v: 45
};

console.log(p);
