var pizza_names = [
  "BBQ chicken pizza",
  "Peppy paneer pizza",
  "Neapolitan pizza",
];

for (let i = 0; i < pizza_names.length; i++) {
  document.getElementById("document").innerHTML +=
    "I Like" + " " + pizza_names[i] + "<br>";
}

document.getElementById("document").innerHTML +=
  "Plain Ol’ Cheese Okay, this is so easy it’s almost not its own style, but for many people, cheese pizza is the only real kind of pizza out there...";
