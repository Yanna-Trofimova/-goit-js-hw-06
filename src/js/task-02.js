const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsList = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  let itemEl = document.createElement("li");
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;
  ingredientsList.append(itemEl);
}