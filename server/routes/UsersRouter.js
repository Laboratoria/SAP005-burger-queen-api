const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/users/:uid", UsersController.getAllUsers)
router.post("/users/:uid", UsersController.getAllUsers)
router.put("/users/:uid", UsersController.getAllUsers)
router.delete("/users/:uid", UsersController.getAllUsers)


module.exports = router