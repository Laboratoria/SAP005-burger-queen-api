const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/users/:id", UsersController.getUserId)
router.post("/users", UsersController.usersPost)
router.put("/users/:id", UsersController.usersPut)
router.delete("/users/:id", UsersController.usersDelete)


module.exports = router