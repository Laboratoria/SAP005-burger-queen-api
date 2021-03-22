const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.getAllProducts)
router.get("/products/:id", ProductsController.getProductId)
router.post("/products", ProductsController.ProductPost)
router.put("/products/:id", ProductsController.ProductPut)
router.delete("/products/:id", ProductsController.productsDelete)


module.exports = router