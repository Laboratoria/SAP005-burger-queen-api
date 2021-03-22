const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
// const Users = require("./Users")

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
// router.use('/', Users);
// router.use('/products', Products);
// router.use('/orders', Orders);

module.exports = router
