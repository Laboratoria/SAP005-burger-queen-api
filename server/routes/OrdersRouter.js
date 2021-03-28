const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get("/", OrdersController.getAllOrders);
router.get("/:id", OrdersController.getOrderId);
router.post("/", OrdersController.orderPost);
router.put("/:id", OrdersController.orderPut);
router.delete("/:id", OrdersController.orderDelete);

module.exports = router