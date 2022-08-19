const { body } = require("express-validator");
const { extName, resolve } = require("path");
const { unlinkSync } = require("fs");
const { index } = require("../models/users.model");
const register = [
  //Validacion Nombre y Apellido
  body("campoNombreApellido")
    .notEmpty()
    .withMessage("Ingresar nombre y apellido")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre debe contener como mínimo 3 caracteres")
    .bail(),

  //Validacion Nombre de Usuario
  body("campoNombreUsuario")
    .notEmpty()
    .withMessage("Ingresar nombre de usuario")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener como mínimo 5 caracteres")
    .bail(),

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
      if (users.includes(value)) {
        throw new Error("El email ya esta registrado");
      }
      return true;
    }),

  //Validacion fecha de nacimiento
  //body('campoCumpleanos').notEmpty().withMessage('Ingresar fecha de nacimiento').bail().custom({min:}).withMessage('La ////fecha no es válida'),

  //Validacion contraseña
  body("campoContrasena")
    .notEmpty()
    .withMessage("Ingresar contraseña")
    .bail()
    .isLength({ min: 5 })
    .withMessage("La contraseña debe contener como mínimo 5 caracteres"),

  //Validacion confirmacion de contraseña
  body("campoContrasenaRepe")
    .notEmpty()
    .withMessage("Ingresar contraseña")
    .bail()
    .isLength({ min: 5 })
    .withMessage("La contraseña debe contener como mínimo 5 caracteres"),

  //Validacion Foto de Perfil
  body("campoAvatar").custom((value, { req }) => {
    let { files } = req.files;
    if (!files || files.length == 0) {
      throw new Error("No se subió ninguna imagen");
    }
    let extensions = [".svg", ".png", ".jpg", ".jpeg"];
    let image = files[0];
    let extension = extName(image.filename);
    if (!extensions.includes(extension)) {
      unlinkSync(
        resolve(dirname, "../../uploads/", "usersImages", image.filename)
      ); //Esta ruta puede ser un problema
      throw new Error("La imagen debe ser .svg,.png,.jpg,.jpeg ");
    }
    if (image.size > 2097152) {
      unlinkSync(
        resolve(dirname, "../../uploads/", "usersImages", image.filename)
      );
      throw new Error("La imagen supera pesada 2MB");
    }
    return true;
  }),

  //Validacion Terminos y Condiciones
];

module.exports = register;
