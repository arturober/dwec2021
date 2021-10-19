let form = document.getElementById("form");
let table = document.getElementById("table");
let imgPreview = document.getElementById("imgPreview");

form.image.addEventListener("change", (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  if (file) reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    // Remove d-none class from the element “imgPreview”
    imgPreview.src = reader.result;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.name.value;
  let description = form.description.value;
  let price = form.price.value;

  let tr = document.createElement("tr");

  let tdImg = document.createElement("td");
  let img = document.createElement("img");
  img.src = imgPreview.src;
  tdImg.append(img);
  let tdName = document.createElement("td");
  tdName.append(name);
  let tdDesc = document.createElement("td");
  tdDesc.append(description);
  let tdPrice = document.createElement("td");
  tdPrice.append(price);

  tr.append(tdImg, tdName, tdDesc, tdPrice);
  table.querySelector("tbody").append(tr);
  form.reset();
  imgPreview.src = "";
});
