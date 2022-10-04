let invitationList = ["alishba", "amna", "ali"];

invitationList.forEach((person) => {
  document.getElementById("document").innerHTML += `
    ${person} is still invited to dinner. <br>
  `;
});
