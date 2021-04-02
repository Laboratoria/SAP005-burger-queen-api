const { Router } = require("express")
const ordersController = require("../controller/ordersController")

const ordersRouter = Router()

ordersRouter.get("/", ordersController.getOrders);
ordersRouter.get("/:orderId", ordersController.getIdOrders);
ordersRouter.post("/", ordersController.postOrders);
ordersRouter.put("/:orderId", ordersController.putIdOrders);
ordersRouter.delete("/:orderId", ordersController.deleteOrders);

module.exports = ordersRouter
