let usernames = [];

let data = document.getElementById("data");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let username = document.getElementById("username").value;
  if (usernames.includes(username.toLowerCase())) {
    document.getElementById("data").innerHTML = "username already exists.";
    document.getElementById("listToCraete").value = "";
  } else {
    usernames.push(username.toLowerCase());
    document.getElementById("data").innerHTML = "username is available.";
    document.getElementById("listToCraete").value = "";
  }
});
