/* eslint-disable linebreak-style */
const { Router } = require('express');
const ExampleRouter = require('./ExampleRouter'); // Onde se localiza a nossa rota

const router = Router();

// aqui vai todas as rotas
router.use('/', ExampleRouter);

module.exports = router;
