const express = require('express')
const routes = require('./server/routes/index')
const app = express()
const port = 3000

app.use('/', routes);

const users = [
  { id: 1, 
    username: 'Pedro Pinto', 
    email: 'ppinto@ppl.com' },
  { id: 2, 
    username: 'Francisco', 
    email: 'francisco@ppl.com' }, 
  { id: 3, 
    username: 'Carla Figueiredo', 
    email: 'cfig@ppl.com' }
];

app.get('/', (req, res) => {
  res.send(users)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})