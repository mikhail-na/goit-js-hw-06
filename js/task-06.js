//* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//* перевіряє його вміст щодо правильної кількості введених символів.

//? Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//? Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
//? якщо неправильна кількість - червоним.

//* Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inputEl = document.getElementById('validation-input');
// const inputLength = document.querySelector('input[data-length="6"]');



function onInputBlur(event) {

    if (event.target.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid');
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
    }

    else {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
           }
            inputEl.classList.add('invalid')
        }
  
    
};

inputEl.addEventListener('blur', onInputBlur);



	