const { Router } = require("express");
const router = Router();
const {
    all,
    one,
    process,
    terminator,
} = require("../../controllers/apis/product.api");

router.get("/", all);
router.get("/:id", one);

router.post("/", process);
router.post("/:id", terminator);

module.exports = router;
