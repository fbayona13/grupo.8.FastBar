const { body } = require("express-validator");
const { user } = require("../database/models/index");
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
    .custom(async (value) => {
      let users = await user.findAll();
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
    .custom(async (value, { req }) => {
      let { email } = req.body;
      let user = user.findOne({ where: { email: email } });

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
