const db = require('../db/models');
const ProductsController = {
  async getAllProducts(req, res) {
    try {
      const products = await db.Products.findAll();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async getProductId(req, res) {
    try {
      const id = req.params;
      const product = await db.Products.findOne({
        where: id,
      });
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async postProducts(req, res) {
    try {
      const {
        name, price, flavor, complement, image, subType, type,
      } = req.body;
      const product = await db.Products.create({
        name, price, flavor, complement, image, subType, type,
      });
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async putProducts(req, res) {
    try {
      const {
        name, price, flavor, complement, image, subType, type,
      } = req.body;
      const id = req.params;
      await db.Products.update(
        {
          name, price, flavor, complement, image, subType, type,
        },
        {
          where: id,
        },
      );
      res.status(200).send('dados alterados');
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async deleteProducts(req, res) {
    try {
      const id = req.params;
      await db.Products.destroy({
        where: id,
      });
      res.status(200).send('produto deletado');
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = ProductsController;