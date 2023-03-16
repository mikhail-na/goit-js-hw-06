const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//* Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const addElementsInList = document.querySelector('#ingredients')

let array = [];

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item')
  // addElementsInList.append(itemEl)
  return array.push(itemEl);
});

addElementsInList.append(...array);
console.log("🚀 ~ file: task-02.js:32 ~ addElementsInList:", addElementsInList)
