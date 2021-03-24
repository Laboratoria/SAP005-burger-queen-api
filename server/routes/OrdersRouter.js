const { Router } = require('express')
const OrdersController = require("../controller/OrdersController")
const router = Router()

router.get('/', OrdersController.getAllOrders);
// router.get('/:uid', OrdersController.getOrderById);
// router.post('/', OrdersController.postOrders);
// router.put('/:uid', OrdersController.putOrders);
// router.delete('/:uid', OrdersController.deleteOrders);

module.exports = router
