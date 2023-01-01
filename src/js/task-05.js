const input = document.querySelector(`#name-input`);
const name = document.querySelector(`#name-output`);


input.addEventListener(`focus`, onInputFocus);

function onInputFocus() { 
    console.log(` інпут у фокусі`);
};


input.addEventListener(`input`, onInputChange);

function onInputChange(event) { 
    
   if (event.currentTarget.value === ``) {
        return name.textContent = `Anonymous`;
    }


     if (event) {
        return name.textContent = event.currentTarget.value
    }
    
};


