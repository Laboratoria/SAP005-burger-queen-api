/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
// eslint-disable-next-line quotes
const db = require("../db/models");

// eslint-disable-next-line spaced-comment
//RETORNA TODOS OS PEDIDOS
const getAllOrders = (req, res) => {
  db.Orders.findAll()
    .then((result) => {
      res.status(200).json(result);
      connection.end();
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

// LOCALIZA PEDIDO POR ID
const getOrderId = (req, res) => {
  db.Orders.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        message: 'Não foi possível processar a operação',
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};

// INSERE UM PEDIDO
const orderPost = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { user_id, client_name, table, status } = req.body;
  db.Orders.create({
    user_id,
    client_name,
    table,
    status,
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

// ALTERA UM PEDIDO
const orderPut = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  db.Orders.update(
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

// DELETA UM PEDIDO
const orderDelete = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        // eslint-disable-next-line quotes
        message: "Pedido excluído",
      });
    })
    .catch(() => {
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      });
    });
};

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line eol-last
// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line eol-last
module.exports = { getAllOrders, getOrderId, orderPost, orderPut, orderDelete };