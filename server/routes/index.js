const express = require('express');
const { Router } = require('express');

const app = express();
const users = require('./users');
const products = require('./products');

const router = Router();

app.use('/users', users);
app.use('/products', products);

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

module.exports = app;
