const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

// aqui vai as requisições
router.get("/",OrdersController.getAllOrders)
router.post("/",OrdersController.postOrders)
router.get("/:id",OrdersController.getOrdersId)
router.put("/:id",OrdersController.putOrders)
 router.delete("/:id",OrdersController.deleteOrders)

module.exports = router