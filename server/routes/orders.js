const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    req.send('Cria novo produto');
  })
  .post((req, res) => {
    req.send('Cria novo pedido');
  });

router
  .route('/order:Id')
  .get((req, res) => {
    req.send('Pega dados do pedido');
  })
  .put((req, res) => {
    req.send('Atualiza os dados do pedido');
  })
  .delete((req, res) => {
    req.send('Deleta os dados do pedido');
  });

module.exports = router;
