const express = require('express')
const cors = require("cors");
const routes = require('./server/routes/index')
const app = express()
const port = 3000
// const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/', routes);
// app.use(routes);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})