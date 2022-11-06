const passwordButton = document.querySelectorAll(".password");

for (let i = 0; i < input.length; i++) {
    input[i].onclick = function () {
      input[i].setAttribute("required", "");
    };
  }
  
  for (let i = 0; i < inputPhone.length; i++) {
    inputPhone[i].onclick = function () {
      inputPhone[i].pattern = "^[0-9]{11}";
    };
  }
  
  for (let i = 0; i < inputEmail.length; i++) {
    inputEmail[i].onclick = function () {
      inputEmail[i].pattern = "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})";
    };
  }
  
  // Пароль
  
  for (let i = 0; i < passwordButton.length; i++) {
    passwordButton[i].addEventListener("click", function () {
      if (passwordInput[i].type === "text") {
        passwordInput[i].type = "password";
      } else {
        passwordInput[i].type = "text";
      }
    });
  }
  
  passwordRepeat.addEventListener("input", function () {
    if (passwordRepeat.value != passwordOriginal.value) {
      passwordRepeat.classList.add("input--error");
    } else {
      passwordRepeat.classList.remove("input--error");
    }
  });
  