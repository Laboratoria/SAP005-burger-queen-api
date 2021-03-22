const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.send('Pega dados de todos os produtos.');
  })
  .post((req, res) => {
    res.send('Cria um novo produto.');
  });

router
  .route('/:productId')
  .get((req, res) => {
    res.send(`Pega dados do item ${req.params.productId}.`);
  })
  .put((req, res) => {
    res.send(`Atualiza item ${req.params.productId}.`);
  })
  .delete((req, res) => {
    res.send(`Deleta item ${req.params.productId}.`);
  });

module.exports = router;
