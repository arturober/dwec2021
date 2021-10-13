let input = document.getElementById("item");
let insertFirt = document.getElementById("insertFirst");
let insertLast = document.getElementById("insertLast");
let insertBefore = document.getElementById("insertBefore");
let replace = document.getElementById("replace");
let deleteBtn = document.getElementById("delete");
let list = document.getElementById("list");

insertLast.addEventListener("click", e => {
    let li = document.createElement("li");
    li.append(input.value);
    input.value = "";
    list.append(li);
});

insertFirst.addEventListener("click", e => {
    let li = document.createElement("li");
    li.append(input.value);
    input.value = "";
    list.prepend(li);
});

insertBefore.addEventListener("click", e => {
    let pos = +document.getElementById("position").value;
    let currentLi = list.children[pos];
    if(currentLi) {
        let li = document.createElement("li");
        li.append(input.value);
        input.value = "";
        currentLi.before(li);
    }
});

replace.addEventListener("click", e => {
    let pos = +document.getElementById("position").value;
    let currentLi = list.children[pos];
    if(currentLi) {
        let li = document.createElement("li");
        li.append(input.value);
        input.value = "";
        currentLi.replaceWith(li);
    }
});

deleteBtn.addEventListener("click", e => {
    let pos = +document.getElementById("position").value;
    let currentLi = list.children[pos];
    if(currentLi) {
        currentLi.remove();
    }
});
