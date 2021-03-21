const { Router } = require('express');
const ExampleController = require('../controller/orderController');

const router = Router();

// aqui vai as requisições
router.get("/", ExampleController.getAllOrders);
router.get("/:id", ExampleController.getOrderId);
router.post("/", ExampleController.postOrder);
router.put("/:id", ExampleController.updateOrder);
router.delete("/:id", ExampleController.deleteOrder);



module.exports = router