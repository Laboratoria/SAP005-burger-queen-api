const db = require('../db/models');
const OrdersController = {
  async getAllOrders(req, res) {
    try {
      const order = await db.Orders.findAll();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async getOrderId(req, res) {
    try {
      const order = await db.Orders.findOne();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async postOrders(req, res) {
    try {
      const order = await db.Orders.create();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async putOrders(req, res) {
    try {
      const order = await db.Orders.update();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async deleteOrders(req, res) {
    try {
      const order = await db.Order.destroy();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = OrdersController;