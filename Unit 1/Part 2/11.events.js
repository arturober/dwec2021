// We can only type numbers in these inputs
function onlyNumbers(e) {
    console.log(e.target.value + ": " + e.key);
    if(e.key < '0' || e.key > '9') {
        e.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", e => {
    let i1 = document.getElementById("i1");
    let i2 = document.getElementById("i2");

    i1.addEventListener("keypress", onlyNumbers);
    i2.addEventListener("keypress", onlyNumbers);

    document.getElementById("google").addEventListener("click", e => {
        console.log("No puedes ir a Google");
        e.preventDefault();
    });
});