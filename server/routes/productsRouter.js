const { Router } = require("express")
const productsController = require("../controller/productsController.js")

const productsRouter = Router()

productsRouter.get("/", productsController.get);
productsRouter.get("/:productId", productsController.getId);
productsRouter.post("/", productsController.post);
productsRouter.put("/:productId", productsController.putId);
productsRouter.delete("/:productId", productsController.deleteId);

module.exports = productsRouter

