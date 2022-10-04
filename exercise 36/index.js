var size = prompt("Please enter your Shirt Size");
var text = prompt("Please enter your Shirt text");

function make_shirt() {
  document.getElementById("document").innerHTML =
    "The size of the shirt is : " + size + "<br><br>";
  document.getElementById("document").innerHTML +=
    "The text of the shirt is : " + text;
}

make_shirt();
