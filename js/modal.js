const menu = document.querySelector(".header-menu");
const toggle = document.querySelector(".header-menu__toggle");
const body = document.querySelector(".page__body");
const intro = document.querySelector(".intro");

const enter = document.getElementById("dialogEnter");
const registration = document.getElementById("dialogRegistration");
const enterInput = enter.querySelectorAll(".input");
const registrationInput = registration.querySelectorAll(".input");

const input = document.querySelectorAll(".input");
const inputEmail = document.querySelectorAll(".input--check-email");
const inputPhone = document.querySelectorAll(".input--check-phone");
const passwordInput = document.querySelectorAll(".input--password");

const passwordOriginal = registration.querySelector(".password-original");
const passwordRepeat = registration.querySelector(".password-repeat");

menu.classList.remove("header-menu--nojs");
menu.classList.remove("header-menu--opened");
menu.classList.add("header-menu--closed");

toggle.addEventListener("click", function () {
  menu.classList.toggle("header-menu--closed");
  menu.classList.toggle("header-menu--opened");
});

toggle.addEventListener("click", function () {
  if (menu.classList.contains("header-menu--opened")) {
    document.body.classList.add("page__body--modal-open");
    intro.style.background = "none";
  } else {
    document.body.classList.remove("page__body--modal-open");
  }
});

registration.addEventListener("close", () => {
  for (let i = 0; i < registrationInput.length; i++) {
    registrationInput[i].value = "";
    passwordInput[i].type = "password";
    passwordRepeat.classList.remove("input--error");
    registrationInput[i].removeAttribute("required");
  }
});

enter.addEventListener("close", () => {
  for (let i = 0; i < enterInput.length; i++) {
    enterInput[i].value = "";
    passwordInput[i].type = "password";
    enterInput[i].removeAttribute("required");
  }
});

