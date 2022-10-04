var favorite_fruits = ["Apple", "Mango", "Banana"];

if (fruits.includes("Mango")) {
  document.getElementById("document").innerHTML = "You Really like Mango";
}

if (fruits.includes("Apple")) {
  document.getElementById("document").innerHTML = "You Really like Apple";
}

if (fruits.includes("Banana")) {
  document.getElementById("document").innerHTML = "You Really like Banana";
}

if (fruits.includes("grapes")) {
  document.getElementById("document").innerHTML =
    "does not exists in my fruits array.";
}

if (fruits.includes("cherry")) {
  document.getElementById("document").innerHTML =
    "does not exists in my fruits array.";
}
