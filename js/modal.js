const dialogOpener = document.querySelector(".header-menu__button--open");
const dialog = document.querySelector(".dialog");
const body = document.querySelector(".page__body");
const buttonEnter = document.querySelector(".button--enter");
const enter = document.querySelector(".enter");
const buttonRegistration = document.querySelector(".button--registration");
const registration = document.querySelector(".registration");
const closeEnterButton = document.querySelector(
  ".header-menu__button--enter-close"
);
const closeRegistrationButton = document.querySelector(
  ".header-menu__button--registration-close"
);

buttonEnter.addEventListener("click", () => {
  enter.style.display = "block";
  closeEnterButton.style.display = "block";
  enter.classList.add("dialog--open");
  document.body.classList.add("page__body--scroll-lock");
});

buttonRegistration.addEventListener("click", () => {
  registration.style.display = "block";
  closeRegistrationButton.style.display = "block";
  registration.classList.add("dialog--open");
  document.body.classList.add("page__body--scroll-lock");
});

dialogOpener.addEventListener("click", () => {
  document.body.classList.add("page__body--scroll-lock");
});

dialog.addEventListener("close", () => {
  body.classList.remove("page__body--scroll-lock");
  dialog.style.display = "none";
});

enter.addEventListener("close", () => {
  body.classList.remove("page__body--scroll-lock");
  enter.style.display = "none";
  enter.classList.remove("dialog--open");
  closeEnterButton.style.display = "none";
});

registration.addEventListener("close", () => {
  body.classList.remove("page__body--scroll-lock");
  registration.style.display = "none";
  registration.classList.remove("dialog--open");
  closeRegistrationButton.style.display = "none";
});
