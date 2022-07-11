const { Router } = require ('express');
const router = Router();

let { productDetail, newProduct, editProduct } = require ('../controllers/products');

router.get ('/detail', productDetail);
router.get ('/new', newProduct);
router.get ('/edit', editProduct);

module.exports = router;
