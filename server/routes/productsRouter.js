const { Router } = require("express")
const productsController = require("../controller/productsController.js")

const productsRouter = Router()

productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getIdProducts);
productsRouter.post("/", productsController.postProducts);
productsRouter.put("/:productId", productsController.putIdProducts);
productsRouter.delete("/:productId", productsController.deleteIdProducts);

module.exports = productsRouter

