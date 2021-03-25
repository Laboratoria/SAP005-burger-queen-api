const express = require('express')
const routes = require('./server/routes/index')
const UserRouter = require('./server/routes/UserRouter')
const ProductRouter = require('./server/routes/ProductRouter')
const OrderRouter = require('./server/routes/ProductRouter')
const app = express()
const port = 3000

app.use('/', routes);
app.use("/", UserRouter);
app.use("/", ProductRouter);
app.use("/", OrderRouter);



app.get('*', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})