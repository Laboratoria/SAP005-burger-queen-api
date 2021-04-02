const { Router } = require('express')
const Users = require("./Users");
const Products = require("./Products");
const Orders = require("./Orders");

const router = Router()

// aqui vai todas as rotas
router.use("/Users", Users);
router.use("/Products", Products);
router.use("/Orders", Orders);


module.exports = router
