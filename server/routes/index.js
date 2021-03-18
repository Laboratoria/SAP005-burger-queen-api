/* eslint-disable linebreak-style */
const { Router } = require('express');
const ExampleRouter = require('./ExampleRouter');

const router = Router();
router.use(require('body-parser').urlencoded({ extended: false })); // Somente para dados simples. corpo da entrada da requisição.
router.use(require('body-parser').json());
// So aceita formato json, esta forma e para ler o json usando express
router.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');// Colocado todos ou então preencha com o servidor especifico 'https://meusite.com.br'.
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // O que aceitamos de cabeçalho.
  // Tipos de  opções aceita.
  if (req.method === 'OPTIONS') {
    res.header('Acces-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
    return res.status(200).send({});
  }
  next();
});
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
