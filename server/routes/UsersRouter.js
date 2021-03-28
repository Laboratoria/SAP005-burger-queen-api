const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/:id", UsersController.getUserId)
router.post("/", UsersController.usersPost)
router.put("/:id", UsersController.usersPut)
router.delete("/:id", UsersController.usersDelete)


module.exports = router