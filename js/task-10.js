//* Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
//* і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, 
//* колекція елементів очищається.


{/* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>  */}

//* Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
//*  скільки вказано в amount і додає їх у div#boxes.

//? Розміри найпершого <div> - 30px на 30px.
//? Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//? Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//? Використовуй готову функцію getRandomHexColor для отримання кольору.

//* Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("[type='number']");
const boxesEl = document.getElementById('boxes');
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';


function createBoxes(amount) {
  let elementsArray = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const btnCreateEl = document.createElement('div');
    btnCreateEl.style.height = `${size}px`;
    btnCreateEl.style.width = `${size}px`;
    btnCreateEl.style.margin = '15px';
    btnCreateEl.style.backgroundColor = getRandomHexColor();

    elementsArray.push(btnCreateEl);
  
  }

  boxesEl.append(...elementsArray);
};

function destroyBoxes() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
};

btnCreateEl.addEventListener('click', () => {
  createBoxes(Number(inputEl.value));
});
btnDestroyEl.addEventListener('click', destroyBoxes);



