const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.send('Pega dados de todos os pedidos.');
  })
  .post((req, res) => {
    res.send('Cria um novo pedido.');
  });

router
  .route('/:orderId')
  .get((req, res) => {
    res.send(`Pega dados do pedido ${req.params.productId}.`);
  })
  .put((req, res) => {
    res.send(`Atualiza pedido ${req.params.productId}.`);
  })
  .delete((req, res) => {
    res.send(`Deleta pedido ${req.params.productId}.`);
  });

module.exports = router;
