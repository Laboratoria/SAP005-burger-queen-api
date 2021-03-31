/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get('/', OrdersController.getOrderAll);
router.get('/:id', OrdersController.getOrderId);
router.post('/', OrdersController.orderCreate);
router.put('/:id', OrdersController.updateOrderId);
router.delete('/:id', OrdersController.deleteOrderId);

module.exports = router;