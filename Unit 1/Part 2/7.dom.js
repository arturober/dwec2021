let form = document.getElementById("form");
let table = document.getElementById("table");

form.addEventListener("submit", e => {
    e.preventDefault();

    let name = form.name.value;
    let description = form.description.value;
    let price = form.price.value;

    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.append(name);
    let tdDesc = document.createElement("td");
    tdDesc.append(description);
    let tdPrice = document.createElement("td");
    tdPrice.append(price);

    tr.append(tdName, tdDesc, tdPrice);
    tr.append(tdName);
    table.querySelector("tbody").append(tr);
    form.reset();
});
