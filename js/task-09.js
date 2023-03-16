//* Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
//* і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

//! Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeBodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.innerHTML = getRandomHexColor();

};

changeColorBtnEl.addEventListener('click', onChangeBodyColor);
//  console.log("🚀 ~ file: task-09.js:29 ~ changeColorBtnEl:", changeColorBtnEl)
 













