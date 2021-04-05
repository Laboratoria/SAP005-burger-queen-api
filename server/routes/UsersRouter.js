// eslint-disable-next-line semi
const { Router } = require('express')
// eslint-disable-next-line semi
const UsersController = require('../controller/UsersController')

// eslint-disable-next-line semi
const router = Router()

// aqui vai as requisições
// eslint-disable-next-line quotes
// eslint-disable-next-line semi
// eslint-disable-next-line quotes
// eslint-disable-next-line semi
router.get('/', UsersController.getAllUsers)
router.get('/:id', UsersController.getUserId);
router.post('/', UsersController.usersPost);
router.put('/:id', UsersController.usersPut);
router.delete('/:id', UsersController.usersDelete);

// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line eol-last
module.exports = router;
