const { Router } = require('express')
const ProductsController = require("../controller/ProductsController")
const router = Router()

router.get('/', ProductsController.getAllProducts);
router.get('/:productId', ProductsController.getProductById);
router.post('/', ProductsController.createProduct);
router.put('/:productId', ProductsController.updateProduct);
router.delete('/:productId', ProductsController.deleteProduct);

module.exports = router
