const { body } = require("express-validator");
const { extname, resolve } = require("path");
const { unlinkSync } = require("fs");

const newProduct = [
  //Nombre del trago
  body("drinkName")
    .notEmpty()
    .withMessage("Tu trago necesita un nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debe tener al menos 5 caracteres")
    .bail(),

  //Precio del trago
  body("precio")
    .notEmpty()
    .withMessage("Tu trago necesita un precio")
    .bail()
    .isLength({ max: 6 })
    .withMessage("Ehh taanto queres cobrar por un trago")
    .bail(),

  //Ingredientes del trago
  body("ingredientes")
    .notEmpty()
    .withMessage("Contanos que lleva el trago, no hace falta poner medidas")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Debe tener al menos 20 caracteres")
    .bail()
    .isLength({ max: 200 })
    .withMessage("Debe tener un max de 200 caracteres")
    .bail(),

  //Imagen del trago
  body("image").custom((value, { req }) => {
    let { files } = req.files;
    if (!files || files.length == 0) {
      throw new Error("No se subió ninguna imagen");
    }
    let extensions = [".svg", ".png", ".jpg", ".jpeg"];
    let image = files[0];
    let extension = extname(image.filename);
    if (!extensions.includes(extension)) {
      unlinkSync(
        resolve(dirname, "../../uploads/", "productsImages", image.filename)
      ); //Esta ruta puede ser un problema
      throw new Error("La imagen debe ser .svg,.png,.jpg,.jpeg ");
    }
    if (image.size > 2097152) {
      unlinkSync(
        resolve(dirname, "../../uploads/", "productsImages", image.filename)
      );
      throw new Error("La imagen supera pesada 2MB");
    }
    return true;
  }),

  //Categorias
  body("precio")
    .custom((value) => {
      if (value == "") {
        throw new Error("Debe elegir una categoria");
      }
      return true;
    })
    .bail(),

  //Perfil de Sabor
  body("sabor")
    .notEmpty()
    .withMessage("Contanos que sabor podemos esperar del trago")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Debe tener al menos 20 caracteres")
    .bail()
    .isLength({ max: 200 })
    .withMessage("Debe tener un max de 200 caracteres")
    .bail(),
];

module.exports = newProduct;
