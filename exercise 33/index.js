var ordinary_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinary_number.length; i++) {
  if (i == 0) {
    document.getElementById("document").innerHTML +=
      ordinary_number[i] + "st<br>";
  } else if (i == 1) {
    document.getElementById("document").innerHTML +=
      ordinary_number[i] + "nd<br>";
  } else if (i == 2) {
    document.getElementById("document").innerHTML +=
      ordinary_number[i] + "rd<br>";
  } else {
    document.getElementById("document").innerHTML +=
      ordinary_number[i] + "th<br>";
  }
}
