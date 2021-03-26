const express = require('express');
const controller = require('../controller/ExampleController');

let router = express.Router();

router
  .router('/')
  .get(controller.getAllExamples)
  .post((req, res) => {
    req.send('Cria um novo usuário');
  });

router
  .router('/user:Id')
  .get((req, res) => {
    req.send('Pega os dados do usuário');
  })
  .put((req, res) => {
    req.send('Atualiza os dados do usuário');
  })
  .delete((req, res) => {
    req.send('Deleta os dados do usuário');
  });

module.exports = router;
