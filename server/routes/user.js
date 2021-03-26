/* eslint-disable linebreak-style */
const { Router } = require('express');
const User = require('../controller/usersController');

const router = Router();
// aqui vai as requisições || endpoints
router.get('/', User.listAllUsers);
router.get('/:uid', User.getUser);
router.post('/', User.createUser);
router.put('/:uid', User.updateUser);
router.delete('/:uid', User.deleteUser);

module.exports = router;
