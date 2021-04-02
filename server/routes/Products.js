const { Router } = require("express");
const productsController = require("../controller/ProductsController");

const productsRouter = Router();

// aqui vai as requisições
productsRouter.get("/", productsController.getProductsAll);
productsRouter.get("/:id", productsController.getProductsId);
productsRouter.post("/", productsController.postProducts);
productsRouter.put("/:id", productsController.putProducts);
productsRouter.delete("/:id", productsController.deleteProducts);

module.exports = productsRouter;