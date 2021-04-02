const modelsDatabase = require("../db/models");

class OrdersController {
  static async getOrders(req, res) {
    const getOrders = await modelsDatabase.Orders.findAll();
    return res.status(200).json(getOrders);
  }

  static async getIdOrders(req, res) {
    const getIdOrders = await modelsDatabase.Orders.findAll({
      where: { id: Number(req.params) },
    });
    return res.status(200).json(getIdOrders);
  }

  static async postOrders(req, res) {
    const createOrders = req.body;
    const postOrders = await modelsDatabase.Orders.create(createOrders);
    return res.status(201).json(postOrders);
  }

  static async putIdOrders(req, res) {
    const putIdOrders = await modelsDatabase.Orders.update(
      {
        client_name,
        table,
        products,
      },
      {
        where: { id: Number(id) },
      }
    );
    return res.status(200).json(putIdOrders);
  }

  static async deleteOrders(req, res) {
    const deleteOrders = await modelsDatabase.Orders.destroy({
      where: { id: Number(req.params) 
      },
    });
    return res.status(200).json(deleteOrders);
  }
}

module.exports = OrdersController
