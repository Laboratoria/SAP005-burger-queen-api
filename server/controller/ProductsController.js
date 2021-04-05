/* eslint-disable eol-last */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const db = require('../db/models');

const getAllProducts = (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    // eslint-disable-next-line semi
    })
};

const getProductId = (req, res) => {
  db.Products.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        // eslint-disable-next-line quotes
        message: "error",
      }));
};

const ProductPost = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line object-curly-newline
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  db.Products.bulkCreate([{
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  }])
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    // eslint-disable-next-line semi
    })
};

const ProductPut = (req, res) => {
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line object-curly-newline
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  db.Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.status(200).json({
        // eslint-disable-next-line quotes
        message: "Dados atualizados com sucesso! ",
      });
    })
    .catch(() => {
      res.json({
        // eslint-disable-next-line quotes
        message: "error ",
      });
    });
};

const productsDelete = (req, res) => {
  db.Products.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'produto excluído',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir produto',
    }));
};

module.exports = {
  getAllProducts,
  getProductId,
  ProductPost,
  ProductPut,
  productsDelete,
};
