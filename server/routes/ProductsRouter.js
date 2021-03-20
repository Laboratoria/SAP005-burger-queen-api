const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.getAllProducts)
router.get("/users/:uid", ProductsController.getAllProducts)
router.post("/users", ProductsController.getAllProducts)
router.put("/users/:uid", ProductsController.getAllProducts)
router.delete("/users/:uid", ProductsController.getAllProducts)

module.exports = router