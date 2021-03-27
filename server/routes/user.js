/* eslint-disable linebreak-style */
const { Router } = require('express');
const User = require('../controller/usersController');

const router = Router();
// aqui vai as requisições || endpoints
router.get('/', User.all);
router.get('/:uid', User.getUser);
router.post('/', User.create);
router.put('/:uid', User.update);
router.delete('/:uid', User.delete);

module.exports = router;
