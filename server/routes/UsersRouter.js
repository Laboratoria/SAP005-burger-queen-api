const { Router } = require('express')
const UsersController = require("../controller/UsersController")
const router = Router()

router.get('/', UsersController.getAllUsers);
// router.get('/:uid', UsersController.getUserId);
// router.post('/', UsersController.postUser);
// router.put('/:uid', UsersController.putUser);
// router.delete('/:uid', UsersController.deleteUser);

module.exports = router
