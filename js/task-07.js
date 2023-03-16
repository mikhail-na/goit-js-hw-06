//* Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) 
//* і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//* перетягуючи повзунок, буде змінюватися розмір тексту.


const refs = {
   inputFontSizeRef: document.getElementById('font-size-control'),
   inlineTextRef: document.getElementById('text')
};

function onInputFontSize() {
    refs.inlineTextRef.style.fontSize = `${refs.inputFontSizeRef.value}px`;
};

refs.inputFontSizeRef.addEventListener('input', onInputFontSize);
