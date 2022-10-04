let people = ["ayaz", "sajjad", "ali", "nawaz"];

people.forEach((person) => {
  document.getElementById(
    "document"
  ).innerHTML += `I would like to invite ${person} <br>`;
});
