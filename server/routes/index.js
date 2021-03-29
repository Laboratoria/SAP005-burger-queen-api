const express = require('express');

const app = express();

app.use(express.json());

const users = require('./users');
const products = require('./products');
const orders = require('./orders');

app.use('/users', users);
app.use('/products', products);
app.use('/orders', orders);

module.exports = app;
