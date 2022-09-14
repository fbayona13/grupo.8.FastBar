let form = document.forms.formularioNewProduct;
let inputs = form.elements;

inputs.drinkName.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isLength(value, { min: 5 })) {
    msg = "Debe tener al menos 5 caracteres";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.precio.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isLength(value, { min: 1, max: 6 })) {
    msg = "Te parece a vos cobrar tanto por un trago?";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.ingredientes.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isLength(value, { min: 20 })) {
    msg = "Eeeh minimo de 20 palabras";
  } else if (!validator.isLength(value, { max: 200 })) {
    msg = "Eeeh maximo de 200 palabras";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.image.addEventListener("change", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.file;
  let msg = null;
  let err = parent.querySelector(".msg-error");
  let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (value.length == 0) {
    msg = "Subite una foto de tu trago fachero!";
  } else if (!allowedExtensions.exec(value)) {
    msg = "La imagen debe ser del tipo .jpg, .jpeg, .png";
  }

  // if (!validator.isMimeType(file[0].type)) {
  //   msg = "La imagen debe ser del tipo .jpg, .jpeg, .png";
  // }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.categorias.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (validator.equals(value, "")) {
    msg = "Te falto elegir la categoria";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});

inputs.sabor.addEventListener("input", (event) => {
  let parent = event.target.parentElement;
  let value = event.target.value;
  let msg = null;
  let err = parent.querySelector(".msg-error");

  if (!validator.isLength(value, { min: 20 })) {
    msg = "Contanos que esperar del trago";
  } else if (!validator.isLength(value, { max: 200 })) {
    msg = "Eeeh maximo de 200 palabras";
  }

  if (msg) {
    err.classList.add("display");
    err.innerText = msg;
  } else {
    err.classList.remove("display");
  }
});