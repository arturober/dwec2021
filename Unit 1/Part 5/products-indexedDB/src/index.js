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
    await productService.deleteProduct(product.id);
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

