const express = require('express');

const app = express();
const users = require('./users');
const products = require('./products');
const orders = require('./orders');

app.use('/users', users);
app.use('/products', products);
app.use('/orders', orders);

module.exports = app;
