const { Router } = require('express')
const UsersController = require("../controller/UsersController")
const router = Router()

router.get('/', UsersController.getAllUsers);
router.get('/:uid', UsersController.getUserId);
router.post('/', UsersController.postUser);

module.exports = router
