const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get("/", OrdersController.getAllOrders);
router.get("/orders/:id", OrdersController.getOrderId);
router.post("/orders", OrdersController.orderPost);
router.put("/orders/:id", OrdersController.orderPut);
router.delete("/orders/:id", OrdersController.orderDelete);

module.exports = router