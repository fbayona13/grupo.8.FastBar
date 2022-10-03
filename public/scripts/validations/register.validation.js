let form = document.forms.formularioRegister;
let inputs = form.elements;

inputs.name.addEventListener("input", (event) => {
    let parent = event.target.parentElement;
    let value = event.target.value;
    let msg = null;
    let err = parent.querySelector(".msg-error");

    if (!validator.isLength(value, { min: 5 })) {
        msg = "Debe tener al menos 5 caracteres";
    } else if (!validator.isAlphanumeric(value)) {
        msg = "Debe contener al menos un numero y una mayuscula";
    }

    if (msg) {
        err.classList.add("display");
        err.innerText = msg;
    } else {
        err.classList.remove("display");
    }
});

inputs.lastname.addEventListener("input", (event) => {
    let parent = event.target.parentElement;
    let value = event.target.value;
    let msg = null;
    let err = parent.querySelector(".msg-error");

    if (!validator.isLength(value, { min: 5 })) {
        msg = "Debe tener al menos 5 caracteres";
    } else if (!validator.isAlphanumeric(value)) {
        msg = "Debe contener al menos un numero y una mayuscula";
    }

    if (msg) {
        err.classList.add("display");
        err.innerText = msg;
    } else {
        err.classList.remove("display");
    }
});

inputs.email.addEventListener("input", (event) => {
    let parent = event.target.parentElement;
    let value = event.target.value;
    let msg = null;
    let err = parent.querySelector(".msg-error");

    if (!validator.isLength(value, { min: 7 })) {
        msg = "Debe tener al menos 7 caracteres";
    } else if (!validator.isEmail(value)) {
        msg = "Introduzca un email";
    }

    if (msg) {
        err.classList.add("display");
        err.innerText = msg;
    } else {
        err.classList.remove("display");
    }
});

inputs.birthday.addEventListener("input", (event) => {
    let parent = event.target.parentElement;
    let value = event.target.value;
    let msg = null;
    let err = parent.querySelector(".msg-error");

    if (validator.isDate(value) < "2000-01-01") {
        msg = "Debe ser mayor de edad";
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
    let config = {
        minLength: 8,
        maxLength: 15,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    };

    if (!validator.isLength(value, { min: 8, max: 15 })) {
        msg = "Debe tener entre 8 a 15 caracteres";
    }
    if (!validator.isStrongPassword(value, config)) {
        msg = "Debe tener una minuscula, una mayuscula, un numero y un simbolo";
    }

    if (msg) {
        err.classList.add("display");
        err.innerText = msg;
    } else {
        err.classList.remove("display");
    }
});

inputs.password2.addEventListener("input", (event) => {
    let parent = event.target.parentElement;
    let password = inputs.campoContrasena.target.value;
    let value = event.target.value;
    let msg = null;
    let err = parent.querySelector(".msg-error");

    if (!validator.equals(value, password)) {
        msg = "Las contrasenas no coinciden";
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
        msg = "Subite una fotuli";
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
