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

const slider = function (buttons, slides) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      slides.forEach((item) => (item.style.order = `${i + 1}`));
      slides[i].style.order = `${0}`;
      slides[i + 1].style.order = `${1}`;
    };
  }
};

slider(tariffButton, tariffCard);
slider(connectionButton, connectionCard);
slider(reviewsButton, reviewsCard);

if (mediaQueryTablet.matches) {
  connectionButtonList.style.display = "none";
}
