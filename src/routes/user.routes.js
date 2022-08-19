const { Router } = require("express");
const multer = require("multer");
const router = Router();
const storage = require("../modules/storage");
const upload = multer({ storage: storage("usersImages") });
const {
  index,
  login,
  register,
  detail,
  save,
  edit,
  modify,
  process,
  access
} = require("../controllers/users");
const middlewaresRegister = require('../middlewares/register');
const middlewaresLogin = require('../middlewares/login');

router.get("/", index);

//Para mostrar el detalle de un user por ID
router.get("/detail/:id", detail);

//Para acceder a la info del formulario new.ejs y generar un producto nuevo en la DB
router.get("/register", register);
router.post("/save", [upload.any()], save);

//Validacion de los elementos del register
router.post("/register", middlewaresRegister, process)

router.get("/login", login);

//Validacion del login
router.post('/login', middlewaresLogin, access);

//Para acceder a la info del formulario edit.ejs y editar un producto de la DB
router.get("/edit/:id", edit);
router.put("/edit/:id", [upload.any()], modify);

module.exports = router;
