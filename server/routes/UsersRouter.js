const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.post("/",UsersController.postUsers)
router.get("/:id",UsersController.getUserId)
router.put("/:id",UsersController.putUsers)
router.delete("/:id",UsersController.deleteUsers)

module.exports = router