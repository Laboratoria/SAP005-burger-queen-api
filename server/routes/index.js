// eslint-disable-next-line semi
const { Router } = require('express')
// eslint-disable-next-line quotes
// eslint-disable-next-line semi
const UsersRouter = require('./UsersRouter')
// eslint-disable-next-line quotes
const ProductsRouter = require('./ProductsRouter');
const OrdersRouter = require('./OrdersRouter');

const router = Router();

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

module.exports = router;
