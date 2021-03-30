const database = require("../db/models")
// const models = require("../db/models")

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const getProducts = await database.Products.findAll()
      return res.status(200).json(getProducts);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível encontrar os usuários" });
    }
  }

}

module.exports = ProductsController