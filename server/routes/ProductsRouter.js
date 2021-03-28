const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.getAllProducts)
router.get("/:id", ProductsController.getProductId)
router.post("/", ProductsController.ProductPost)
router.put("/:id", ProductsController.ProductPut)
router.delete("/:id", ProductsController.productsDelete)


module.exports = router