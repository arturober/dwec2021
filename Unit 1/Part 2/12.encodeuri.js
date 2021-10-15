let input = document.getElementById("search");
let link = document.getElementById("link");

link.addEventListener("click", (e) => {
  link.href = "https://google.es/search?q=" + encodeURIComponent(input.value);
});
