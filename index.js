const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = 3000

app.use(express.json());
app.use(routes);

app.listen(port);