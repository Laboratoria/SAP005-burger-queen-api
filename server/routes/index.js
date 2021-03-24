const { Router } = require("express")
const usersRouter = require("./usersRouter.js")
const productsRouter = require("./productsRouter.js")
const ordersRouter = require("./ordersRouter.js")

const router = Router()

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

module.exports = router
