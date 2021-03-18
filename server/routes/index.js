/* eslint-disable linebreak-style */
const { Router } = require('express');
const ExampleRouter = require('./ExampleRouter'); // Onde se localiza a nossa rota

const router = Router();

router.use('/', ExampleRouter);

router.use((req, res, next) => {
  const erro = new Error('Endereço não localizado');
  erro.status = 404;
  next(erro);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = router;
