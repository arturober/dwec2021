let list = document.getElementById("list");
console.log("----- ChildNodes ------");
list.childNodes.forEach(n => console.log(n)); // HTML, text, comments
console.log("----- Children ------");
Array.from(list.children).forEach(n => console.log(n));
console.log("----- previous and next sibling -----");
// let li = list.querySelector("li:first-child");
let li = list.firstElementChild;
console.log(li); // <li>Element 1</li>
console.log(li.nextSibling); // "\n        "
console.log(li.nextElementSibling); // <li>Element 2</li>