const { Router } = require('express')
const getAllUsers = require("../controller/UsersController")
const router = Router()

router.get('/users', getAllUsers);
router.get('/users/:uid', users);
router.post('/users', algumacoisa);
router.put('/users/:uid', algumacoisa);
router.delete('users/:uid', tarar);

module.exports = router
