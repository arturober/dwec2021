import { SERVER } from "./constants";
import { ProductService } from "./product-service.class";
import Swal from "sweetalert2";
import "../styles.css";

let table = null;
let productService = new ProductService();

function addProduct(product) {
  let tr = document.createElement("tr");

  let tdImg = document.createElement("td");
  let img = document.createElement("img");
  img.src = SERVER + "/" + product.photo;
  tdImg.append(img);
  let tdName = document.createElement("td");
  tdName.append(product.name);
  let tdDesc = document.createElement("td");
  tdDesc.append(product.description);
  let tdDelete = document.createElement("td");
  let btnDel = document.createElement("button");
  btnDel.append("Delete");
  btnDel.style.color = "red";
  btnDel.addEventListener("click", async (e) => {
    await productService.deleteProduct(product.id);
    tr.remove();
  });
  tdDelete.append(btnDel);

  tr.append(tdImg, tdName, tdDesc, tdDelete);
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
