/* eslint-disable linebreak-style */
const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const port = 3000;

app.use('/', routes);

// req e requisição, res e response resposta e next passa para a proxima requisição.
// app.use('*', (req, res) => {
//   res.status(200).send({
//     messagem: 'OK, deu certo',
//   });
// });

// app.get('*', (req, res) => {
//   res.send('Hello World!');
//   // res.status(200).send({
//   //   messagem: 'OK, deu certo',
//   // });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
