const { Router } = require("express");
const multer = require('multer')
const router = Router();
const storage = require ("../modules/storage")
const upload = multer({ storage: storage("usersImages") });




const { index, login, register, detail, save, edit, modify } = require("../controllers/users");

router.get("/login", login);
router.get("/register", register);
router.get("/", index);

//Para acceder a la info del formulario new.ejs y generar un producto nuevo en la DB

router.post("/save", [upload.any()], save);

//Para acceder a la info del formulario edit.ejs y editar un producto de la DB
router.get("/edit/:id", edit);
router.put("/edit/:id", [upload.any()], modify);

//Para mostrar el detalle de un producto por ID
router.get("/detail/:id", detail);


module.exports = router;



