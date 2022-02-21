'use strict';
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.button');
let popupCloseButton = document.querySelector('.popup-close');
let nameInput = document.getElementById("nameInput"); 
let phoneInput = document.getElementById("phoneInput"); 

popup.classList.remove('popup--opened');

popupOpenButton.addEventListener('click', () => {
  popup.classList.add('popup--opened');
  nameInput.focus();
});

popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('popup--opened');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup--opened')) {
      evt.preventDefault();
      popup.classList.remove('popup--opened');
    }
  }
});

//isFocused phone
phoneInput.addEventListener('focus', () => {
  phoneInput.value = "+7 (";
})

