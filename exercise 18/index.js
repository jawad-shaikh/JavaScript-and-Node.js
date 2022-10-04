var places = ["Naran", "Kashmir", "Lahore", "Islamabad", "Okara"];

// original order
document.getElementById("document").innerHTML += "<br> original order <br>";

document.getElementById("document").innerHTML += [...places]
  .join(" ")
  .toString();

// alphabetical order
document.getElementById("document").innerHTML += "<br> alphabetical order <br>";

document.getElementById("document").innerHTML += [...places]
  .sort()
  .join(" ")
  .toString();

// original order
document.getElementById("document").innerHTML += "<br> original order <br>";
document.getElementById("document").innerHTML += [...places]
  .join(" ")
  .toString();

// reverse order
document.getElementById("document").innerHTML +=
  "<br> reverse alphabetical order <br>";

document.getElementById("document").innerHTML += [...places]
  .reverse()
  .join(" ")
  .toString();

// original order
document.getElementById("document").innerHTML += "<br> original order <br>";
document.getElementById("document").innerHTML += [...places]
  .join(" ")
  .toString();
