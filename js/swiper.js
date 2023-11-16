"use strict";

// swiper

var paginationItems = ["Dogie", "Падение", "Возвращение"];
var customPaginationItem = function customPaginationItem(index, className) {
  return '<span class="' + className + '">' + paginationItems[index] + "</span>";
};
var mobilePaginationItem = function mobilePaginationItem(index, className) {
  return '<span class="' + className + '">' + "</span>";
};
var mainSwiper = new Swiper(".main__swiper-container", {
  direction: "vertical",
  pagination: {
    el: ".main__swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: customPaginationItem
  },
  breakpoints: {
    320: {
      direction: "vertical",
      pagination: {
        el: ".main__swiper-pagination",
        clickable: true,
        type: "bullets",
        renderBullet: mobilePaginationItem
      }
    },
    768: {
      direction: "vertical",
      pagination: {
        el: ".main__swiper-pagination",
        clickable: true,
        type: "bullets",
        renderBullet: customPaginationItem
      }
    }
  }
});