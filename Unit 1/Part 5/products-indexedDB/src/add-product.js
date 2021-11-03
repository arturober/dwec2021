import { ProductService } from "./product-service.class";
import Swal from "sweetalert2";
import "../styles.css";

let form = null;
let imgPreview = null;
let productService = new ProductService();

async function submitProduct(e) {
  e.preventDefault();

  let product = {
    name: form.name.value,
    description: form.description.value,
    photo: imgPreview.src,
  };

  try {
    let prodResp = await productService.addProduct(product);
    await Swal.fire("Good job!", "Product added successfully!", "success");
    location.assign("index.html");
  } catch (e) {
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  form = document.getElementById("form");
  imgPreview = document.getElementById("imgPreview");

  form.image.addEventListener("change", (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
      // Remove d-none class from the element “imgPreview”
      imgPreview.src = reader.result;
    });
  });

  form.addEventListener("submit", submitProduct);
});
