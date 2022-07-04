const {Router} = require ('express');
const router = Router();

let {productDetail} = require ('../controllers/products');
router.get ('/productDetail', productDetail);

module.exports = router;
