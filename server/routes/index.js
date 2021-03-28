const { Router } = require('express')
const UsersRouter = require("./UsersRouter")
const ProductsRouter = require("./ProductsRouter")
const OrdersRouter = require("./OrdersRouter")

const router = Router()

router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

module.exports = router
