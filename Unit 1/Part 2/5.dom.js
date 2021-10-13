let form = document.getElementById("form1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Name: ${form.username.value}`);
  //   let inputs = document.querySelectorAll("input[type=checkbox]");
  let inputs = form.food;
  let values = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  console.log(`Favourite foods: ${values}`); // ['pizza', 'salad', 'soup']
});
