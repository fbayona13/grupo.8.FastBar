const { Router } = require("express");
const router = Router();

const { home, cart } = require("../controllers/main");

router.get("/", home);
router.get("/cart", cart);

module.exports = router;