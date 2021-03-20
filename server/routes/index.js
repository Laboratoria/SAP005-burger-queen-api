const { Router } = require('express')
const routerUsers = require("./routerUsers")

const router = Router()

// aqui vai todas as rotas
router.use('/users', routerUsers);
router.use('/products', routerUsers);


module.exports = router
