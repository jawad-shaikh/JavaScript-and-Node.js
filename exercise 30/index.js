let users = ["admin", "jawad", "ayaz", "sajjad"];

users.forEach((user) => {
  if (user == "admin") {
    document.getElementById(
      "document"
    ).innerHTML += `Hello admin, would you like to see a status report? <br>`;
  }
  document.getElementById(
    "document"
  ).innerHTML += `Hello ${user}, thank you for logging in again. <br>`;
});
