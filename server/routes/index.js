const { Router } = require('express')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')

const router = Router()

// aqui vai todas as rotas
router.use('/users', UserRouter);
router.use('/auth', AuthRouter);

module.exports = router
