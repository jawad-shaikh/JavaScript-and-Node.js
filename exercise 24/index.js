// • Tests for equality and inequality with strings

let Test = "jawad";

"jawad" == Test
  ? (document.getElementById("document").innerHTML = "I predict True <br>")
  : (document.getElementById("document").innerHTML += "I predict False");

// • Tests using the lower case function

"jawad" !== Test.toLowerCase()
  ? (document.getElementById("document").innerHTML += "I predict True")
  : (document.getElementById("document").innerHTML += "I predict False <br>");

//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num = 5;
num <= 5
  ? (document.getElementById("document").innerHTML += "I predict True <br>")
  : (document.getElementById("document").innerHTML += "I predict False");

// • Tests using "and" and "or" operators

(num <= 6 && num >= 62) || num == 2
  ? (document.getElementById("document").innerHTML += "I predict True ")
  : (document.getElementById("document").innerHTML += "I predict False <br>");

//  • Test whether an item is in a array
let names = ["Ali", "junaid", "khan", "sarim"];

names[0] == "Ali"
  ? (document.getElementById("document").innerHTML += "I predict True <br>")
  : (document.getElementById("document").innerHTML += "I predict False ");

// • Test whether an item is not in a array
names[5] == "Ali"
  ? (document.getElementById("document").innerHTML += "I predict True <br>")
  : (document.getElementById("document").innerHTML += "I predict False");
