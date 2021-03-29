const { Router } = require('express')
const OrdersController = require("../controller/OrdersController")
const router = Router()

router.get('/', OrdersController.getAllOrders);
// router.get('/:orderId', OrdersController.getOrderById);
// router.post('/', OrdersController.createOrder);
// router.put('/:orderId', OrdersController.updateOrder);
// router.delete('/:orderId', OrdersController.deleteOrder);

module.exports = router
