const { Router } = require('express');
const orderController = require('../controller/orderController');

const router = Router();

//---------------------------------HTTP METHOD: GET--------------------------------------//
//allProducts request
router.get("/orders", orderController.allOrders);
//productsById request
router.get("/orders/:id", orderController.ordersById);

//---------------------------------HTTP METHOD: POST-------------------------------------//
//addProducts request
router.post("/orders/add", orderController.addOrders);

//---------------------------------HTTP METHOD: PUT--------------------------------------//
//updateProducts
router.put("/orders/update/:id", orderController.updateOrders);


module.exports = router