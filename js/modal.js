"use strict";

var popupLinks = document.querySelectorAll('.popup-link');
var lockPadding = document.querySelectorAll('.lockPadding');
var html = document.querySelector('html');
var unlock = true;
var timeout = 300;
if (popupLinks.length > 0) {
  var _loop = function _loop() {
    var popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (e) {
      var popupName = popupLink.getAttribute('href').replace('#', '');
      var currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      validateForm();
      e.preventDefault();
    });
  };
  for (var i = 0; i < popupLinks.length; i++) {
    _loop();
  }
}
var popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2() {
    var el = popupCloseIcon[_i];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  };
  for (var _i = 0; _i < popupCloseIcon.length; _i++) {
    _loop2();
  }
}
function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    var popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive) {
  var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}
function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + "px";
  for (var _i2 = 0; _i2 < lockPadding.length; _i2++) {
    var el = lockPadding[_i2];
    el.style.paddingRight = lockPaddingValue;
  }
  html.style.paddingRight = lockPaddingValue;
  html.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
function bodyUnlock() {
  setTimeout(function () {
    for (var _i3 = 0; _i3 < lockPadding.length; _i3++) {
      var el = lockPadding[_i3];
      el.style.paddingRight = '0px';
    }
    html.style.paddingRight = '0px';
    html.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}