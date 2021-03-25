const { Router } = require('express');
const userController = require('../controller/UserController');

const router = Router();

//---------------------------------HTTP METHOD: GET--------------------------------------//
//allUsers request
router.get("/users", userController.allUsers);
//userById request
router.get("/users/:id", userController.userById);

//---------------------------------HTTP METHOD: POST-------------------------------------//
//addUser request
router.post("/users/add", userController.addUser);

//---------------------------------HTTP METHOD: PUT--------------------------------------//
//updateUser
router.put("/users/update/:id", userController.updateUser);

//---------------------------------HTTP METHOD: DELETE--------------------------------------//
//deleteUser
router.delete("/users/delete/:id", userController.deleteUser);

module.exports = router