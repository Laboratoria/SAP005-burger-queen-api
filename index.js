const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = 3000

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})