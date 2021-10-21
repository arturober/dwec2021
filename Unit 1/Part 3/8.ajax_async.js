let table = null;
let form = null;
let imgPreview = null;
const SERVER = "http://arturober.com:5005/";

async function submitProduct(e) {
  e.preventDefault();

  let product = {
    name: form.name.value,
    description: form.description.value,
    photo: imgPreview.src,
  };

  try {
    let resp = await fetch(`${SERVER}/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) throw new Error(resp.statusText);

    let data = await resp.json();
    addProduct(data.product);
    form.reset();
    imgPreview.src = "";
  } catch (e) {
    console.error(e);
  }
}

function addProduct(product) {
  let tr = document.createElement("tr");

  let tdImg = document.createElement("td");
  let img = document.createElement("img");
  img.src = SERVER + product.photo;
  tdImg.append(img);
  let tdName = document.createElement("td");
  tdName.append(product.name);
  let tdDesc = document.createElement("td");
  tdDesc.append(product.description);
  let tdDelete = document.createElement("td");
  let btnDel = document.createElement("button");
  btnDel.append("Delete");
  btnDel.style.color = "red";
  btnDel.addEventListener("click", (e) => deleteProduct(product.id, tr));
  tdDelete.append(btnDel);

  tr.append(tdImg, tdName, tdDesc, tdDelete);
  table.querySelector("tbody").append(tr);
}

async function deleteProduct(idProd, tr) {
  try {
    let resp = await fetch(`${SERVER}products/${idProd}`, { method: "DELETE" });
    if (!resp.ok) throw new Error(resp.statusText);
    tr.remove();
  } catch (e) {
    console.error(e);
  }
}

async function getProducts() {
  let resp = await fetch(`${SERVER}products`);
  let data = await resp.json();
  data.products.forEach((p) => addProduct(p));
}

document.addEventListener("DOMContentLoaded", (e) => {
  table = document.getElementById("table");
  form = document.getElementById("form");
  imgPreview = document.getElementById("imgPreview");

  getProducts();

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
