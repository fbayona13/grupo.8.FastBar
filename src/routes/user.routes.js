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
} = require("../controllers/users");

router.get("/", index);

//Para mostrar el detalle de un user por ID
router.get("/detail/:id", detail);

//Para acceder a la info del formulario new.ejs y generar un producto nuevo en la DB
router.get("/register", register);
router.post("/save", [upload.any()], save);

router.get("/login", login);
//router.post('/login', access);

//Para acceder a la info del formulario edit.ejs y editar un producto de la DB
router.get("/edit/:id", edit);
router.put("/edit/:id", [upload.any()], modify);

module.exports = router;
