const { Router } = require("express");
const multer = require("multer");
const router = Router();
const storage = require("../modules/storage");
const upload = multer({ storage: storage("productsImages") });
const {
  index,
  search,
  detail,
  newie,
  edit,
  modify,
  save,
  destroy,
} = require("../controllers/products");

//Middlewares
const middlewaresNewProduct = require("../middlewares/newProduct");

//Para mostrar el index de todos los productos
router.get("/", index);

//Para la barra buscadora del header.ejs (busca por nombre, categoria, creador)
router.get("/search", search);

//Para mostrar el detalle de un producto por ID
router.get("/detail/:id", detail);

//Para acceder a la info del formulario new.ejs y generar un producto nuevo en la DB
router.get("/new", newie);
router.post("/save", [upload.any(), middlewaresNewProduct], save);
//Para borrar un producto de la DB
router.post("/delete", destroy);

//Para acceder a la info del formulario edit.ejs y editar un producto de la DB
router.get("/edit/:id", edit);
router.put("/edit/:id", [upload.any()], modify);

module.exports = router;
