const { Router } = require("express");
const OrdersController = require("../controller/OrdersController.js");

const ordersRouter = Router();

// aqui vai as requisições
ordersRouter.get("/", OrdersController.getAllOrders);
ordersRouter.get("/:orderId", OrdersController.getOrderId);
ordersRouter.post("/", OrdersController.postOrders);
ordersRouter.put("/:orderId", OrdersController.putOrders);
ordersRouter.delete("/:orderId", OrdersController.deleteOrders);

module.exports = ordersRouter;