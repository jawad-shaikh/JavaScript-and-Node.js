var size = ["large", "medium"];

var text = "I love JavaScript";
var text2 = "I love Coding";

function make_shirt() {
  document.getElementById("document").innerHTML =
    "The size of the shirt is : " + size[0] + "<br><br>";
  document.getElementById("document").innerHTML +=
    "The text of the shirt is : " + text + "<br><br>";

  document.getElementById("document").innerHTML +=
    "The size of the shirt is : " + size[1] + "<br><br>";
  document.getElementById("document").innerHTML +=
    "The text of the shirt is : " + text2;
}

make_shirt();
