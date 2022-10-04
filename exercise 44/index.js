const make_sandwich = (person, ...ingredients) => {
  let ingredientsList = [...ingredients];

  document.getElementById("document").innerHTML = `
    ${person} wants ${ingredientsList.join(" ")} in his/her sandwich.
  `;
};

make_sandwich("jawad", "kechup", "kabab");
