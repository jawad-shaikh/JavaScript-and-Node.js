function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    document.getElementById("document").innerHTML += `${magicians[i]} <br>`;
  }
}

show_magicians(["Aalto", "Simo", "Abbot", "David", "Adams", "Curtis"]);
