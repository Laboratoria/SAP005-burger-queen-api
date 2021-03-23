const { Router } = require('express')
const UserController = require('../controller/UserController')
const AuthController = require('../controller/AuthController')

const router = Router()

// aqui vai as requisições
router.post('/', UserController.createUser)
router.get('/', UserController.getAllUser)
router.get('/:id', AuthController.auth, UserController.getUserById)

module.exports = router