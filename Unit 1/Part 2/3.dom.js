// All paragraphs in #div2 -> color red

// Solution 1
// Array.from(document.body.children[1].children)
// .forEach(p => p.style.color = "red");

// Solution 2
// let div = document.getElementById("div2");
// Array.from(div.getElementsByTagName("p")) // <p> inside div#div2
// .forEach(p => p.style.color = "red");

// Solution 3
document.querySelectorAll("#div2 > p")
.forEach(p => p.style.color = "red");
