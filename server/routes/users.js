const { Router } = require('express')
const usersController = require('../controller/usersController')

const router = Router()

// aqui vai as requisições
router.get("/", usersController.getAllUsers)
router.get('/:uid', usersController.getUserById);
router.post('/', usersController.createNewUser);

module.exports = router