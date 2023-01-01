const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

input.addEventListener("input", onChangeInput);


function onChangeInput(event) {
  return (text.style.fontSize = event.currentTarget.value + "px");
}