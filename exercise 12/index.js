let friendsList = ["ayaz", "sajjad", "ali", "nawaz"];

friendsList.forEach((friend) => {
  document.getElementById(
    "document"
  ).innerHTML += `${friend}, How are you today? <br>`;
});
