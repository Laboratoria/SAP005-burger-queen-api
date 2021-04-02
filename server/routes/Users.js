const { Router } = require("express");
const UserController = require("../controller/UserController");

const userRouter = Router();

// aqui vai as requisições
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserId);
router.post("/", UserController.postUsers);
router.put("/:id", UserController.putUsers);
router.delete("/:id", UserController.deleteUsers);

module.exports = userRouter;