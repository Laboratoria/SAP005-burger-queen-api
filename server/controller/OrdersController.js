const db = require("../db/models");

//RETORNA TODOS OS PEDIDOS
const getAllOrders = (req, res) => {
  db.Orders.findAll()
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

//LOCALIZA PEDIDO POR ID
const getOrderId = (req, res) => {
  db.Orders.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//INSERE UM PEDIDO
const orderPost = (req, res) => {
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
      res.json({
        message: "Não foi possível processar a operação",
      })
    );
};

//ALTERA UM PEDIDO
const orderPut = (req, res) => {
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

//DELETA UM PEDIDO
const orderDelete = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: "Pedido excluído",
      });
    })
    .catch(() => {
      res.json({
        message: "Não foi possível processar a operação",
      });
    });
};

module.exports = { getAllOrders, getOrderId , orderPost, orderPut, orderDelete}
;