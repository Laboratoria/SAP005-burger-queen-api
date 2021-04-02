const { Router } = require("express");
const productsController = require("../controller/ProductsController");

const productsRouter = Router();

// aqui vai as requisições
router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductId);
router.post("/", productsController.postProducts);
router.put("/:id", productsController.putProducts);
router.delete("/:id", productsController.deleteProducts);

module.exports = productsRouter;