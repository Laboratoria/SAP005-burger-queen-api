/* eslint-disable max-len *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars *//* eslint-disable consistent-return */
const { Router } = require('express');
// const express = require('express');
// const cors = require('cors');
// const userModel = require('../db/models/userModel');
const Users = require('./user');
const Products = require('./products');
// const Orders = require('./orders');

const router = Router();
// router.use(cors());
// router.use(require('body-parser').urlencoded({ extended: false })); // Somente para dados simples. corpo da entrada da requisição.
// router.use(express.json());
// So aceita formato json, esta forma e para ler o json usando express
// router.use((req, res, next) => {
//   res.header('Acces-Control-Allow-Origin', '*'); // Colocado todos ou então preencha com o servidor especifico 'https://meusite.com.br'.
//   res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // O que aceitamos de cabeçalho.
//   // Tipos de  opções aceita.
//   if (req.method === 'OPTIONS') {
//     res.header('Acces-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
//     return res.status(200).send({});
//   }
//   next();
// });
// router.use((next) => {
//   const erro = new Error('Endereço não localizado');
//   erro.status = 404;
//   next(erro);
// });
// router.use((error, res) => {
//   res.status(error.status || 500);
//   return res.send({
//     erro: {
//       mensage: error.mesagem,
//     },
//   });
// });
router.use('/users', Users);
router.use('/products', Products);
// router.use('/orders', Orders);

module.exports = router;
