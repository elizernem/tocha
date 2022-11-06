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

const slider = function (buttons, slides) {
  for (let i = 0; i < buttons.length; i++) {
    slides[i].style.order = `${buttons.length - 1}`;
    slides[0].style.order = `${0}`;
    buttons[i].onclick = function () {
      slides[i].style.order = `${0}`;
      if (i === 0) {
        slides[i + 1].style.order = `${1}`;
        slides[i + 2].style.order = `${i + 2}`;
      } else if (i < buttons.length - 1) {
        slides[i - 1].style.order = `${i + 3}`;
        slides[i + 1].style.order = `${1}`;
        slides[0].style.order = `${buttons.length - 1}`;
      } else {
        slides[0].style.order = `${1}`;
        slides[i - 1].style.order = `${buttons.length - 1}`;
      }
    };
  }
}

slider(tariffButton, tariffCard);
slider(connectionButton, connectionCard);
slider(reviewsButton, reviewsCard);