const { Router } = require('express')
const OrdersController = require("../controller/OrdersController")
const router = Router()

router.get('/', OrdersController.getAllOrders);
// router.get('/:orderid', OrdersController.getOrderById);
// router.post('/', OrdersController.createOrder);
// router.put('/:orderid', OrdersController.updateOrder);
// router.delete('/:orderid', OrdersController.deleteOrder);

module.exports = router
