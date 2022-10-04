let person_name = "jawad";

// To Lower Case
document.getElementById(
  "document"
).innerHTML = `To Lower Case: "${person_name.toLowerCase()}" <br>`;

// To Upper Case
document.getElementById(
  "document"
).innerHTML += `To Upper Case: "${person_name.toUpperCase()}" <br>`;

// Title Case
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.getElementById("document").innerHTML += `To Upper Case: "${titleCase(
  person_name
)}" <br>`;
