const { Router } = require("express");
const UserController = require("../controller/UserController.js");

const userRouter = Router();

// aqui vai as requisições
userRouter.get("/", UserController.postUsers);
userRouter.get("/:id", UserController.getUserId);
userRouter.post("/", UserController.getAllUsers);
userRouter.put("/:id", UserController.putUsers);
userRouter.delete("/:id", UserController.deleteUsers);

module.exports = userRouter;