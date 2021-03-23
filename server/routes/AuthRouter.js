const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const router = Router()

// aqui vai as requisições
router.post('/', AuthController.login)

module.exports = router