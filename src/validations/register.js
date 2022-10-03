const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");
const { user } = require("../database/models/index");

const register = [
    //Validacion Nombre
    body("name")
        .notEmpty()
        .withMessage("Ingresar nombre")
        .bail()
        .isLength({ min: 3 })
        .withMessage("El nombre debe contener como mínimo 3 caracteres")
        .bail(),

    //Validacion Apellido
    body("lastname")
        .notEmpty()
        .withMessage("Ingresar apellido")
        .bail()
        .isLength({ min: 3 })
        .withMessage("El apellido debe contener como mínimo 3 caracteres")
        .bail(),

    //Validacion Dirección de Correo
    body("email")
        .notEmpty()
        .withMessage("Ingresar dirección de correo")
        .bail()
        .isEmail()
        .withMessage("El formato de e-mail no es válido")
        .bail()
        .custom(async (value) => {
            let users = await user.findAll();
            users = users.map((u) => u.email);
            if (users.includes(value)) {
                throw new Error("El email ya esta registrado");
            }
            return true;
        }),

    //Validacion fecha de nacimiento
    body("birthday")
        .notEmpty()
        .withMessage("Ingresar fecha de nacimiento")
        .bail()
        .isDate()
        .withMessage("La fecha no es válida"),

    //Validacion contraseña
    body("password")
        .notEmpty()
        .withMessage("Ingresar contraseña")
        .bail()
        .isLength({ min: 5 })
        .withMessage("La contraseña debe contener como mínimo 5 caracteres"),

    //Validacion confirmacion de contraseña
    body("password2")
        .notEmpty()
        .withMessage("Ingresar contraseña")
        .bail()
        .isLength({ min: 5 })
        .withMessage("La contraseña debe contener como mínimo 5 caracteres"),

    //Validacion Terminos y Condiciones
];

module.exports = register;
