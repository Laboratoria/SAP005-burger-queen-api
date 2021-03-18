const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const port = 3333;

app.use('/', routes);

app.get('/', (request, response) => { 
  response.json({message: 'Hello World!'});
})

app.listen(port, () => {
  `${port}`;
})