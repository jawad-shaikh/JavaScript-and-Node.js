let peopleWhoCantMakeToParty = ["ayaz", "sajjad"];

peopleWhoCantMakeToParty.forEach((person) => {
  document.getElementById(
    "document"
  ).innerHTML += `${person} cannot make to party <br>`;
});

// new list
let newList = ["alishba", "amna", "ali", "rohaan"];

newList.forEach((person) => {
  document.getElementById(
    "document"
  ).innerHTML += `I would like to invite ${person} <br>`;
});
