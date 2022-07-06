const {Router} = require ('express');
const router = Router();

let {productDetail} = require ('../controllers/products');
router.get ('/productDetail', productDetail);

let {newProduct} = require ('../controllers/products');
router.get ('/newProduct', newProduct);

let {editProduct} = require ('../controllers/products');
router.get ('/editProduct', editProduct);

module.exports = router;
