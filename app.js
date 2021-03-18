const express = require('express');
const app = express();
 
// Definir a route principal
app.get('/', function(req, res) {
  res.send('RESTful API - Pplware');
});
 
// Lista de Utilizadores
const users = [
  { id: 1, username: 'Pedro Pinto', email: 'ppinto@ppl.com' },
  { id: 2, username: 'Francisco', email: 'francisco@ppl.com' }, 
  { id: 3, username: 'Carla Figueiredo', email: 'cfig@ppl.com' }
];
// Definir um endpoint da API
app.get('/api/listaUsers', function(req, res, next) {
  res.send(users);
})

// Aplicação disponível em http://127.0.0.1:8888/
app.listen(8888);
 