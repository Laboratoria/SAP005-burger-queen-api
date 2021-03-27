const express = require('express');
const controller = require('../controller/users');

const router = express.Router();
const { getAllUsers, createNewUser, getUser, updateUser, deleteUser } = controller;

router
  .route('/')
  .get(getAllUsers)
  .post(createNewUser);

router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
