import { SERVER } from "./constants";
import { ProductService } from "./product-service.class";
import Swal from "sweetalert2";
import "../styles.css";
import { Product } from "./interfaces/product";
const productTemplate = require("../templates/product.handlebars");

let table: HTMLTableElement = null;
const productService = new ProductService();

function addProduct(product: Product): void {
  const tr = document.createElement("tr");
  const prodHTML = productTemplate({...product, photo: `${SERVER}/${product.photo}`});
  tr.innerHTML = prodHTML;
  
  tr.querySelector("button").addEventListener("click", async (e) => {
    await productService.deleteProduct(product.id);
    tr.remove();
  });

  table.querySelector("tbody").append(tr);
}

async function getProducts(): Promise<void> {
  const products = await productService.getProducts();
  Swal.fire("Good job!", "Products loaded successfully!", "success");
  products.forEach((p) => addProduct(p));
}

document.addEventListener("DOMContentLoaded", (e) => {
  table = document.getElementById("table") as HTMLTableElement;

  getProducts();
});
