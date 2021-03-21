const { Router } = require('express')
const routerUsers = require("./routerUsers")
const routerProducts = require("./routerProducts")
const routerOrder = require("./routerOrder")

const router = Router()

// aqui vai todas as rotas
router.use('/users', routerUsers);
router.use('/products', routerProducts);
router.use('/orders', routerOrder);


module.exports = router
