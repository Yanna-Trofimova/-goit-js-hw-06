const counter = {
    value: 0,
    increment() {
        console.log(`increment -> this`, this)
        this.value += 1
     },
    decrement() {
        console.log(`decrement -> this`, this)
        this.value -= 1
    },
};



const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const counterValue = document.querySelector('#value');




incrementBtn.addEventListener(`click`, () => {
    console.log(`Додати`);

    counter.increment();
    console.log(counter);
    counterValue.textContent = counter.value;
    }
);


decrementBtn.addEventListener(`click`, () => {
    console.log(`Відняти`);

    counter.decrement();
    console.log(counter);
    counterValue.textContent = counter.value;
    }
);

