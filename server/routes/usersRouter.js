const { Router } = require("express")
const usersController = require("../controller/usersController.js")

const usersRouter = Router()

usersRouter.get("/", usersController.get);
usersRouter.get("/:id", usersController.getId);
usersRouter.post("/", usersController.post);
usersRouter.put("/:id", usersController.putId);
usersRouter.delete("/:id", usersController.deleteId);

module.exports = usersRouter