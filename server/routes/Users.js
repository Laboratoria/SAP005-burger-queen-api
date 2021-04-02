const { Router } = require("express");
const UserController = require("../controller/UsersController");

const userRouter = Router();

// aqui vai as requisições
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserId);
userRouter.post("/", UserController.postUsers);
userRouter.put("/:id", UserController.putUsers);
userRouter.delete("/:id", UserController.deleteUsers);

module.exports = userRouter;