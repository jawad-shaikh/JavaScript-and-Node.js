let invitationList = ["alishba", "amna", "ali", "rohaan", "saffa", "gufran"];

for (let index = 0; index < invitationList.length; index++) {
  if (invitationList.length != 3) {
    let shrinkedGuest = invitationList.pop();
    console.log(invitationList, invitationList.length);
    document.getElementById(
      "document"
    ).innerHTML += `we’re sorry we can’t invite you to dinner ${shrinkedGuest} <br>`;
  }
}

invitationList.forEach((person) => {
  document.getElementById(
    "document"
  ).innerHTML += `${person}, you are still invited. <br>`;
});
