const { Router } = require ('express');
const router = Router();

const { detail, newie, edit } = require ('../controllers/products');

router.get ('/detail', detail);
router.get ('/new', newie);
router.get ('/edit', edit);

module.exports = router;
