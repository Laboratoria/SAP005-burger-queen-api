const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    req.send('Cria novo produto');
  })
  .post((req, res) => {
    req.send('Cria novo produto');
  });

router
  .route('/product:Id')
  .get((req, res) => {
    req.send('Pega dados do item');
  })
  .put((req, res) => {
    req.send('Atualiza produto');
  })
  .delete((req, res) => {
    req.send('Deleta item');
  });

module.exports = router;
