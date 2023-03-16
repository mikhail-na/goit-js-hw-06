//* Напиши скрипт управління формою логіна.


/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */

//? Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//? Під час відправлення форми сторінка не повинна перезавантажуватися.
//? Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//? Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//?  а значення поля - значенням властивості. 
//? Для доступу до елементів форми використовуй властивість elements.
//? Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector('.login-form');
const userData = {};


const onSubmitForm = (event) => {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;

    const email = formEl.email;
    const password = formEl.password;


    if (email.value === '') {
        alert('Please enter a valid email!');
        
    } if (password.value === '') { 
        alert('Please enter a valid password!');
    } else {
        userData.email = email.value;
        userData.password = password.value;
    }

    document.querySelector('.login-form').reset();

console.log(userData);
};

loginForm.addEventListener('submit', onSubmitForm);
