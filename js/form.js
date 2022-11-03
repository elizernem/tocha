const inputEmail = document.querySelectorAll(".input--check-email");
const valueEmailInput = inputEmail.value;
const buttonClose = document.querySelectorAll(".header-menu__button--close");

for (let i = 0; i < inputEmail.length; i++) {
  inputEmail[i].onclick = function () {
    const pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = pattern.test(valueEmailInput);
    if (!valid) {
      inputEmail[i].classList.add("input--error");
    }
    return valid;
  };
}

