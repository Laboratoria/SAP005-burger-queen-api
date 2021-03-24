const { Router } = require('express')
const ProductsController = require("../controller/ProductsController")
const router = Router()

router.get('/', ProductsController.getAllProducts);
// router.get('/:uid', ProductsController.getProductById);
// router.post('/', ProductsController.postProduct);
// router.put('/:uid', ProductsController.putProduct);
// router.delete('/:uid', ProductsController.deleteProduct);

module.exports = router
