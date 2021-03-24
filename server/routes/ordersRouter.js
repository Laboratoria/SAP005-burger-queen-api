const { Router } = require('express')
const ordersController = require('../controller/ordersController')

const ordersRouter = Router()

ordersRouter.get("/", ordersController.get);
ordersRouter.get("/:orderId", ordersController.getId);
ordersRouter.post("/", ordersController.post);
ordersRouter.put("/:orderId", ordersController.putId);
ordersRouter.delete("/:orderId", ordersController.deleteId);

module.exports = ordersRouter
