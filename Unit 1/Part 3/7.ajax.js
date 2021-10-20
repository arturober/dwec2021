fetch("http://arturober.com:5005/products")
  .then((resp) => resp.json())
  .then((data) => console.log(data));
