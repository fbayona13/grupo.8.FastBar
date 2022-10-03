let form = document.forms.formularioLogin;
let inputs = form.elements;

inputs.email.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isEmail(value)) {
    msg = "No es un email valido";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.password.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isStrongPassword(value)) {
    msg = "No es una contrasena valida";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});
