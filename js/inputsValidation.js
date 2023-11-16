"use strict";

function validateForm() {
  var form = document.getElementById('form');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateNameInput();
    validateEmailInput();
    validatePhoneInput();
    validateMessageInput();
  });
}
function validateNameInput() {
  var nameInput = document.getElementById('name');
  var nameValue = nameInput.value.trim();
  var nameRegex = /^[а-яА-Яa-zA-Z]+$/;
  if (nameRegex.test(nameValue)) {
    nameInput.classList.remove('popup-form--invalid');
    nameInput.classList.add('popup-form--valid');
  } else {
    nameInput.classList.remove('popup-form--valid');
    nameInput.classList.add('popup-form--invalid');
  }
}
function validateEmailInput() {
  var emailInput = document.getElementById('email');
  var nameValue = emailInput.value.trim();
  var nameRegex = /.+@.+\..+/i;
  if (nameRegex.test(nameValue)) {
    emailInput.classList.remove('popup-form--invalid');
    emailInput.classList.add('popup-form--valid');
  } else {
    emailInput.classList.remove('popup-form--valid');
    emailInput.classList.add('popup-form--invalid');
  }
}
function validatePhoneInput() {
  var phoneInput = document.getElementById('phone');
  var nameValue = phoneInput.value.trim();
  var nameRegex = /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/g;
  if (nameRegex.test(nameValue)) {
    phoneInput.classList.remove('popup-form--invalid');
    phoneInput.classList.add('popup-form--valid');
  } else {
    phoneInput.classList.remove('popup-form--valid');
    phoneInput.classList.add('popup-form--invalid');
  }
}
function validateMessageInput() {
  var messageInput = document.getElementById('message');
  var nameValue = messageInput.value.trim();
  var nameRegex = /\w+/g;
  if (nameRegex.test(nameValue)) {
    messageInput.classList.remove('popup-form--invalid');
    messageInput.classList.add('popup-form--valid');
  } else {
    messageInput.classList.remove('popup-form--valid');
    messageInput.classList.add('popup-form--invalid');
  }
}