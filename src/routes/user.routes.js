const { Router } = require("express");
const router = Router();

const { index, login, register } = require("../controllers/users");

router.get("/login", login);
router.get("/register", register);
router.get("/", index);

module.exports = router;
