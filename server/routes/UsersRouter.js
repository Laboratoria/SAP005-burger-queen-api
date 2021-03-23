const { Router } = require('express')
const UsersController = require("../controller/UsersController")
const router = Router()

router.get('/users', UsersController.getAllUsers);
// router.get('/users/:uid', UsersController.getUserId);
// router.post('/users', UsersController.postUser);

module.exports = router
