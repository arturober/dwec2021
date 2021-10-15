let img = document.getElementById("image");
img.title = "A dog";
img.addEventListener("mouseenter", e => {
    img.src = "https://i.natgeofe.com/n/d63f686e-956d-48ea-aba2-e42cd489d84f/6773367.jpg?w=636&h=379";
});

img.addEventListener("mouseleave", e => {
    img.src = "https://i.natgeofe.com/n/284ba48a-3801-4e63-ad95-69a4d2043aad/6994062.jpg?w=636&h=358";
});

Array.from(img.attributes).forEach(a => console.log(a));

img.setAttribute("myattribute", "hello"); // myattribute="hello"
img.dataset.id = "a4f3e6f1"; // data-id="a4f3e6f1"
