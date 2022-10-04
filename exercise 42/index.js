let magiciansList = [];

const make_magicians = (magicians) => {
  for (let i = 0; i < magicians.length; i++) {
    magiciansList.push(magicians[i]);
  }
};

const show_magicians = () => {
  for (let i = 0; i < magiciansList.length; i++) {
    document.getElementById(
      "document"
    ).innerHTML += `Great ${magiciansList[i]} <br>`;
  }
};

make_magicians(["Aalto", "Simo", "Abbot", "David", "Adams", "Curtis"]);
show_magicians();
