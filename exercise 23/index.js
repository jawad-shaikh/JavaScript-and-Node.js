// First 5 test evaluate to true
document.getElementById("document").innerHTML +=
  "first 5 test evaluate to true <br><br>";

// 1 True

let car = "Suzuki";

car == "Suzuki"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += car + "<br>";

// 2 True

let boy_name = "Ali";

boy_name == "Ali"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += boy_name + "<br>";

// 3 True

let Status = "Active";

Status == "Active"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Status + "<br>";

// 4 True

let Grade = "A+";

Grade == "A+"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Grade + "<br>";

// 5 True

let Weather = "Cold";

Weather == "Cold"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Weather + "<br><br>";

// Last 5 test evaluate to False
document.getElementById("document").innerHTML +=
  "Last 5 test evaluate to Fasle <br><br>";

// 1 True

let Transport = "Suzuki";

Transport == "Honda"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Transport + "<br>";

// 2 True

let girl_name = "chilly";

girl_name == "Aliya"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += girl_name + "<br>";

// 3 True

let Statu = "InActive";

Statu == "Active"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Statu + "<br>";

// 4 True

let grade = "A";

grade == "A+"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += grade + "<br>";

// 5 True

let weather = "Cold";

Weather == "Hot"
  ? (document.getElementById("document").innerHTML += "predict True <br>")
  : (document.getElementById("document").innerHTML += "predict False <br>");

document.getElementById("document").innerHTML += Weather + "<br>";
