const { Router } = require('express');
const ExampleController = require('../controller/userController');

const router = Router();

// aqui vai as requisições
router.get("/", ExampleController.getAllUsers);
router.post("/", ExampleController.postUser);




module.exports = router