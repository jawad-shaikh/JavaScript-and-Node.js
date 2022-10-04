let age = 65;

if (age < 2) {
  document.getElementById("document").innerHTML = "the person is a baby";
} else if (age >= 2 && age < 4) {
  document.getElementById("document").innerHTML = "person is a toddler";
} else if (age >= 4 && age < 13) {
  document.getElementById("document").innerHTML = "person is a kid";
} else if (age >= 13 && age < 20) {
  document.getElementById("document").innerHTML = "person is a teenager";
} else if (age >= 20 && age < 65) {
  document.getElementById("document").innerHTML = "person is a adult";
} else if (age >= 65) {
  document.getElementById("document").innerHTML = "person is a elder";
}
