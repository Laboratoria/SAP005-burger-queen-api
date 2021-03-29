/* eslint-disable linebreak-style */
const { Router } = require('express');
const Products = require('../controller/productsController');

const router = Router();
router.get('/', Products.getProducts);
router.get('/:productid', Products.getProductsId);
router.post('/', Products.postProducts);
router.put('/:productid', Products.putProducts);
router.delete('/:productid', Products.deleteProducts);

module.exports = router;
