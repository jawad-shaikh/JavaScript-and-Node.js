let randomObject = {};

let data = document.getElementById("data");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;

  randomObject[key] = value;
  console.log(randomObject);
});
