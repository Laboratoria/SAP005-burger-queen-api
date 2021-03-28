const db = require("../db/models");

const getAllProducts = (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};



const getProductId = (req, res) => {
  db.Products.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

const ProductPost = (req, res) => {
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
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};


const ProductPut = (req, res) => {
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
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.status(200).json({
        message: "Dados de usuário atualizados com sucesso!",
      });
    })
    .catch(() => {
      res.json({
        message: "Não foi possível processar a operação",
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

module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete }