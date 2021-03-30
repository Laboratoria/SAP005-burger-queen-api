const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/",ProductsController.getAllProducts)
router.post("/",ProductsController.postProducts)
router.get("/:id",ProductsController.getProductsUid)
router.put("/:id",ProductsController.putProducts)
router.delete("/:id",ProductsController.deleteProducts)

module.exports = router