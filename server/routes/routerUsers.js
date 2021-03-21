const { Router } = require('express');
const ExampleController = require('../controller/userController');

const router = Router();

// aqui vai as requisições
router.get("/", ExampleController.getAllUsers);
router.get("/:id", ExampleController.getUserId);
router.post("/", ExampleController.postUser);
router.put("/:id", ExampleController.updateUser);
router.delete("/:id", ExampleController.deleteUsers);



module.exports = router