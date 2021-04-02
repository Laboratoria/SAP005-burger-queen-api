const { Router } = require("express");
const OrdersController = require("../controller/OrdersController");

const ordersRouter = Router();

// aqui vai as requisições
router.get("/", OrdersController.getAllOrders);
router.get("/:orderId", OrdersController.getOrderId);
router.post("/", OrdersController.postOrders);
router.put("/:orderId", OrdersController.putOrders);
router.delete("/:orderId", OrdersController.deleteOrders);

module.exports = ordersRouter;