import { ProductService } from "./product-service.class";
import Swal from "sweetalert2";
import "../styles.css";
import { Product } from "./interfaces/product";

let form: HTMLFormElement = null;
let imgPreview: HTMLImageElement = null;
const productService = new ProductService();

async function submitProduct(e: Event): Promise<void> {
  e.preventDefault();

  const product: Product = {
    name: (form.name as any).value,
    description: form.description.value,
    photo: imgPreview.src,
  };

  try {
    await productService.addProduct(product);
    await Swal.fire("Good job!", "Product added successfully!", "success");
    location.assign("index.html");
  } catch (e) {
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  form = document.getElementById("form") as HTMLFormElement;
  imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

  form.image.addEventListener("change", (event: Event) => {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
      // Remove d-none class from the element “imgPreview”
      imgPreview.src = reader.result as string;
    });
  });

  form.addEventListener("submit", submitProduct);
});
