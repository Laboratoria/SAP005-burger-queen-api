const express = require('express');
const controller = require('../controller/users');

const router = express.Router();

const {
  getUsers, createUser, getUserById, updateUser, deleteUser,
} = controller;

router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
