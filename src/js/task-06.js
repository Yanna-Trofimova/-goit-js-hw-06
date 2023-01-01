const input = document.querySelector("#validation-input");

input.addEventListener(`blur`, onInputBlur);


function onInputBlur(event, onInputRemove) {
    if (event.currentTarget.value.length === Number(input.dataset.length))
    {
        input.classList.remove(`invalid`);
        input.classList.add(`valid`);
    }
    
    else if (event.currentTarget.value.length !== Number(input.dataset.length))
    {
        input.classList.remove(`valid`);
        input.classList.add(`invalid`);
        }
}