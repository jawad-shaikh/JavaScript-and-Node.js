let randomArray = [];

let data = document.getElementById("data");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let listToCraete = document.getElementById("listToCraete").value;

  randomArray.push(listToCraete);
  data.innerHTML += `<div>${listToCraete}<div>`;
  document.getElementById("listToCraete").value = "";
});
