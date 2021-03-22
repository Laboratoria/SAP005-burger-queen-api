const { Router } = require('express');
const controller = require('../controller');

const router = Router();

router.get('/', controller.getAllExamples);

router
  .get('/users', (req, res) => {
    res.send('Pega dados de todos os usuários.');
  })
  .post('/users', (req, res) => {
    res.send('Cria um novo usuário.');
  })
  .get('/users/:userId', (req, res) => {
    res.send(`Pega dados do usuário ${req.params.userId}.`);
  })
  .put('/users/:userId', (req, res) => {
    res.send(`Atualiza usuário ${req.params.userId}.`);
  })
  .delete('/users/:userId', (req, res) => {
    res.send(`Deleta usuário ${req.params.userId}.`);
  });

router
  .get('/products', (req, res) => {
    res.send('Pega dados de todos os produtos.');
  })
  .post('/products', (req, res) => {
    res.send('Cria um novo produto.');
  })
  .get('/products/:productId', (req, res) => {
    res.send(`Pega dados do item ${req.params.productId}.`);
  })
  .put('/products/:productId', (req, res) => {
    res.send(`Atualiza item ${req.params.productId}.`);
  })
  .delete('/products/:productId', (req, res) => {
    res.send(`Deleta item ${req.params.productId}.`);
  });

router
  .get('/orders', (req, res) => {
    res.send('Pega dados de todos os pedidos.');
  })
  .post('/orders', (req, res) => {
    res.send('Cria um novo pedido.');
  })
  .get('/orders/:orderId', (req, res) => {
    res.send(`Pega dados do pedido ${req.params.orderId}.`);
  })
  .put('/orders/:orderId', (req, res) => {
    res.send(`Atualiza pedido ${req.params.orderId}.`);
  })
  .delete('/orders/:orderId', (req, res) => {
    res.send(`Deleta pedido ${req.params.orderId}.`);
  });

module.exports = router;
