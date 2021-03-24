const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const UsersRouter = require("./UsersRouter")
const ProductsRouter = require("./ProductsRouter")
const OrdersRouter = require("./OrdersRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

module.exports = router
