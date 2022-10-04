let invitationList = ["alishba", "amna", "ali", "rohaan"];

invitationList.push("saffa", "gufran");

invitationList.forEach((person) => {
  document.getElementById(
    "document"
  ).innerHTML += `I would like to invite ${person} <br>`;
});
