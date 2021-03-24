const { Router } = require('express')
const OrdersController = require("../controller/OrdersController")
const router = Router()

router.get('/', OrdersController.getAllOrders);
// router.get('/:uid', OrdersController.getOrderById);
// router.post('/', OrdersController.createOrder);
// router.put('/:uid', OrdersController.updateOrder);
// router.delete('/:uid', OrdersController.deleteOrder);

module.exports = router
