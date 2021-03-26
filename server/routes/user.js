/* eslint-disable linebreak-style */
const { Router } = require('express');
const User = require('../controller/User');

const router = Router();
// aqui vai as requisições || endpoints
// users
router.get('/', User.getUsers);
router.get('/:uid', User.getUsersUid);
router.post('/', User.posttUsers);
router.put('/:uid', User.putUsers);
router.delete('/:uid', User.deleteUsers);

module.exports = router;
