const tariffCard = document.querySelectorAll(".tariff__item");
const tariffButton = document.querySelectorAll(".tariff__slider-button");
const connectionCard = document.querySelectorAll(".connection__item");
const connectionButton = document.querySelectorAll(
  ".connection__slider-button"
);
const reviewsCard = document.querySelectorAll(".reviews__item");
const reviewsButton = document.querySelectorAll(".reviews__slider-button");
const connectionButtonList = document.querySelector(".connection__button-list");
const mediaQueryTablet = window.matchMedia("(min-width: 768px)");


tariffButton[0].onclick = function () {
  tariffCard[0].style.order = "0";
  tariffCard[1].style.order = "1";
  tariffCard[2].style.order = "2";
};

tariffButton[1].onclick = function () {
  tariffCard[0].style.order = "2";
  tariffCard[1].style.order = "0";
  tariffCard[2].style.order = "1";
};

tariffButton[2].onclick = function () {
  tariffCard[0].style.order = "1";
  tariffCard[1].style.order = "2";
  tariffCard[2].style.order = "0";
};

connectionButton[0].onclick = function () {
  connectionCard[0].style.order = "0";
  connectionCard[1].style.order = "1";
  connectionCard[2].style.order = "2";
};

connectionButton[1].onclick = function () {
  connectionCard[0].style.order = "2";
  connectionCard[1].style.order = "0";
  connectionCard[2].style.order = "1";
};

connectionButton[2].onclick = function () {
  connectionCard[0].style.order = "1";
  connectionCard[1].style.order = "2";
  connectionCard[2].style.order = "0";
};

reviewsButton[0].onclick = function () {
  reviewsCard[0].style.order = "0";
  reviewsCard[1].style.order = "1";
};

reviewsButton[1].onclick = function () {
  reviewsCard[0].style.order = "1";
  reviewsCard[1].style.order = "0";
};

reviewsButton[2].onclick = function () {
  reviewsCard[0].style.order = "0";
  reviewsCard[1].style.order = "1";
};

if (mediaQueryTablet.matches) {
  connectionButtonList.style.display = "none";
}
