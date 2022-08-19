const { body } = require("express-validator");
const { index } = require("../models/users.model");
const { compareSync } = require("bcryptjs");

const login = [
  //Validacion Dirección de Correo
  body("campoEmail")
    .notEmpty()
    .withMessage("Ingresar dirección de correo")
    .bail()
    .isEmail()
    .withMessage("El formato de E-mail no es válido")
    .bail()
    .custom((value) => {
      let users = index();
      users = users.map((u) => u.email);
      if (!users.includes(value)) {
        throw new Error("El email no esta registrado");
      }
      
      return true;
    }),

  //Validacion contraseña
  body("campoContrasena")
    .notEmpty()
    .withMessage("Ingresar contraseña")
    .bail()
    .isLength({ min: 5 })
    .withMessage("La contraseña debe contener como mínimo 5 caracteres")
    .bail()
    .custom((value, { req }) => {
      let { email } = req.body;
      let users = index();
      let user = users.find((u) => u.email === email);

      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      if (!compareSync(value, user.password)) {
        throw new Error("La contraseña es incorrecta");
      }

      return true;
    }),
];

module.exports = login;
