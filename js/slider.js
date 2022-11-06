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

if (mediaQueryTablet.matches) {
  connectionButtonList.style.display = "none";
}

for (let i = 0; i < tariffButton.length; i++) {
  tariffCard[i].style.order = `${tariffButton.length - 1}`;
  tariffCard[0].style.order = `${0}`;
  tariffButton[i].onclick = function () {
    tariffCard[i].style.order = `${0}`;
    if (i === 0) {
      tariffCard[i + 1].style.order = `${1}`;
      tariffCard[i + 2].style.order = `${i + 2}`;
    } else if (i < tariffButton.length - 1) {
      tariffCard[i - 1].style.order = `${i + 3}`;
      tariffCard[i + 1].style.order = `${1}`;
      tariffCard[0].style.order = `${tariffButton.length - 1}`;
    } else {
      tariffCard[0].style.order = `${1}`;
      tariffCard[i - 1].style.order = `${tariffButton.length - 1}`;
    }
  };
}

for (let i = 0; i < connectionButton.length; i++) {
  connectionCard[i].style.order = `${connectionButton.length - 1}`;
  connectionCard[0].style.order = `${0}`;
  connectionButton[i].onclick = function () {
    connectionCard[i].style.order = `${0}`;
    if (i === 0) {
      connectionCard[i + 1].style.order = `${1}`;
      connectionCard[i + 2].style.order = `${i + 2}`;
    } else if (i < connectionButton.length - 1) {
      connectionCard[i - 1].style.order = `${i + 3}`;
      connectionCard[i + 1].style.order = `${1}`;
      connectionCard[0].style.order = `${connectionButton.length - 1}`;
    } else {
      connectionCard[0].style.order = `${1}`;
      connectionCard[i - 1].style.order = `${connectionButton.length - 1}`;
    }
  };
}

for (let i = 0; i < reviewsButton.length; i++) {
  reviewsCard[i].style.order = `${reviewsButton.length - 1}`;
  reviewsCard[0].style.order = `${0}`;
  reviewsButton[i].onclick = function () {
    reviewsCard[i].style.order = `${0}`;
    if (i === 0) {
      reviewsCard[i + 1].style.order = `${1}`;
      reviewsCard[i + 2].style.order = `${i + 2}`;
    } else if (i < reviewsButton.length - 1) {
      reviewsCard[i - 1].style.order = `${i + 3}`;
      reviewsCard[i + 1].style.order = `${1}`;
      reviewsCard[0].style.order = `${reviewsButton.length - 1}`;
    } else {
      reviewsCard[0].style.order = `${1}`;
      reviewsCard[i - 1].style.order = `${reviewsButton.length - 1}`;
    }
  };
}