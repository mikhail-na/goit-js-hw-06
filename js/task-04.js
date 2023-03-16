//* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//* Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//* Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value: 0,

    decrement() {
        console.log(this);
        this.value -= 1;
    },

    increment() {
        console.log(this);
        this.value += 1;
    }
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


decrementBtn.addEventListener('click',  () => {

    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click',  () => {

    counterValue.increment();
    valueEl.textContent = counterValue.value;
});
