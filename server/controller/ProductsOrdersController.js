/* eslint-disable eol-last */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
// eslint-disable-next-line quotes
const db = require('../db/models');

const getAllProducts = (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
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
        message: "Não foi possível processar a operação",
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};
const ProductPost = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  db.Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};
const ProductPut = (req, res) => {
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
    // eslint-disable-next-line comma-dangle
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.status(200).json({
        // eslint-disable-next-line quotes
        message: "Dados de usuário atualizados com sucesso!",
      });
    })
    .catch(() => {
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      });
    });
};
const productsDelete = (req, res) => {
  db.Products.destroy({ where: { id: req.params.id } })
  // eslint-disable-next-line indent
  .then(() => {
    // eslint-disable-next-line indent
    res.status(200).json({
        // eslint-disable-next-line indent
// eslint-disable-next-line indent
message: 'produto excluído',
        // eslint-disable-next-line indent
    });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir produto',
    }));
};
// eslint-disable-next-line object-curly-newline
module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete };
