const database = require("../db/models")
const models = require("../db/models")

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const getProducts = await database.Products.findAll()
      return res.status(200).json(getProducts);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível encontrar os produtos" });
    }
  }

  static async getProductById(req, res) {
    const { productId } = req.params
    try {
      const pId = await database.Products.findAll({
        where: {
          id: Number(productId)
        }
      });
      return res.status(200).json(pId);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível encontrar o produto" });
    }
  }

}

module.exports = ProductsController