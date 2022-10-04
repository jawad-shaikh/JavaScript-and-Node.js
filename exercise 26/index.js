let alien_color = "green";

if (alien_color == "green") {
  document.getElementById("document").innerHTML = "You have earned 5 points.";
} else if (alien_color != "green") {
  document.getElementById("document").innerHTML = "You have earned 10 points.";
} else {
  document.getElementById("document").innerHTML = "else block.";
}
