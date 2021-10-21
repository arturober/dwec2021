let table = document.getElementById("table");
let form = document.getElementById("form");
let imgPreview = document.getElementById("imgPreview");
const SERVER = "http://arturober.com:5005/";

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

function submitProduct(e) {
  e.preventDefault();

  let product = {
    name: form.name.value,
    description: form.description.value,
    photo: imgPreview.src,
  };

  fetch(`${SERVER}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      if(!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      addProduct(data.product);
      form.reset();
      imgPreview.src = "";
    })
    .catch((error) => console.error(error));
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

function deleteProduct(idProd, tr) {
  fetch(`${SERVER}products/${idProd}`, {method: "DELETE"})
  .then(resp => {
    if(!resp.ok) throw new Error(resp.statusText);
    tr.remove();  
  })
  .catch(e => console.error(e));
}

fetch(`${SERVER}products`)
  .then((resp) => resp.json())
  .then((data) => data.products.forEach((p) => addProduct(p)));
