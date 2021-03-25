const express = require("express")
const routes = require("./server/routes/index")
const app = express()
const port = 3000

app.use("/", routes);


app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.get("/teste", (req, res) => {
  res.send("teste")
})

app.listen(port, () => {
  console.log(`ta ouvindo http://localhost:${port}`)
})

module.exports = app