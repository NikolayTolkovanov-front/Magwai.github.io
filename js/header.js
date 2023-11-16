"use strict";

var header = document.querySelector(".header");
var headerMenu = document.querySelector(".header__menu");
var headerBurger = document.querySelector(".header__burger");
var mainContainer = document.querySelector(".main");
var html = document.querySelector('html');
function renderMarginOfMainContainer() {
  if (Number(window.innerWidth) < 1720) {
    var headerHeight = header.clientHeight;
    mainContainer.style.marginTop = headerHeight + "px";
  } else {
    mainContainer.style.marginTop = 0 + "px";
  }
}
renderMarginOfMainContainer();
window.addEventListener("resize", function () {
  renderMarginOfMainContainer();
});
headerBurger.addEventListener("click", function () {
  if (headerMenu.classList.contains("header__menu--active") && headerBurger.classList.contains("header__burger--active") && html.classList.contains("lock")) {
    headerMenu.classList.remove("header__menu--active");
    headerBurger.classList.remove("header__burger--active");
    html.classList.remove("lock");
  } else {
    headerMenu.classList.add("header__menu--active");
    headerBurger.classList.add("header__burger--active");
    html.classList.add("lock");
  }
});