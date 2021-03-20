const { Router } = require('express')
const UsersRouter = require("./UsersRouter")
const ProductsRouter = require("./ProductsRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);

module.exports = router

