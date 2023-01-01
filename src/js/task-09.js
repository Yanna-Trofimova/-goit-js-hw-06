function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector(`body`);

const buttonChangeColor = document.querySelector(`.change-color`);
buttonChangeColor.addEventListener(`click`, newColor);


const span = document.querySelector(`.color`);


function newColor() {
  const color = getRandomHexColor();

  body.style.backgroundColor = color;

  span.textContent = color;
}