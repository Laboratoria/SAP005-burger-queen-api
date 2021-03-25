const { Router } = require('express');
const productController = require('../controller/ProductController');

const router = Router();

//---------------------------------HTTP METHOD: GET--------------------------------------//
//allProducts request
router.get("/products", productController.allProduct);
//productsById request
router.get("/products/:id", productController.productById);

//---------------------------------HTTP METHOD: POST-------------------------------------//
//addProducts request
router.post("/products/add", productController.addProduct);

//---------------------------------HTTP METHOD: PUT--------------------------------------//
//updateProducts
router.put("/products/update/:id", productController.updateProduct);

//---------------------------------HTTP METHOD: DELETE--------------------------------------//
//deleteProducts
router.delete("/products/delete/:id", productController.deleteProduct);

module.exports = router