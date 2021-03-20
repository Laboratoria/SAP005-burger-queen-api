const { Router } = require('express')
const UserRouter = require("./UserRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/users', UserRouter);

module.exports = router
