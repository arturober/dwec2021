let div1 = document.getElementById("div1");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.marginTop = "20px";
div1.style.backgroundColor = "red";

let div2 = document.getElementById("div2");
// div2.className = "verde mediano";
div2.classList.add("verde", "mediano");
// div2.classList.remove -> delete a class

function cambiaColor(e) {
    div2.classList.toggle("verde");
    div2.classList.toggle("azul");
}

div2.addEventListener("mouseenter", cambiaColor);
div2.addEventListener("mouseleave", cambiaColor);
