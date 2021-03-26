const express = require('express');
const controller = require('../controller/users');

const router = express.Router();

router
  .route('/')
  .get(controller.getAllUsers)
  .post((req, res) => {
    res.send('Cria um novo usuário.');
  });

router
  .route('/:userId')
  .get((req, res) => {
    res.send(`Pega dados do usuário ${req.params.userId}.`);
  })
  .put((req, res) => {
    res.send(`Atualiza usuário ${req.params.userId}.`);
  })
  .delete((req, res) => {
    res.send(`Deleta usuário ${req.params.userId}.`);
  });

module.exports = router;
