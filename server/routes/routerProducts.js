const { Router } = require('express');
const ExampleController = require('../controller/productController');

const router = Router();

// aqui vai as requisições
router.get("/", ExampleController.getAllProducts);
router.get("/:id", ExampleController.getProductId);
router.post("/", ExampleController.postProduct);
router.put("/:id", ExampleController.updateProduct);
router.delete("/:id", ExampleController.deleteProducts);



module.exports = router