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

  static async createProduct(req, res) {
    try {
      const { name, price, flavor, complement, image, type, sub_type } = req.body;
      const createProduct = await models.Products.create({
        name,
        price,
        flavor,
        complement,
        image,
        type, 
        sub_type,
        createdAt: new Date(),
        updateAt: new Date()
      })
      return res.status(200).json(createProduct);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível criar um produto" });
    }
  }

  static async updateProduct(req, res) {
    const { productId } = req.params
    try {
      const { name, price, flavor, complement, image, type, sub_type } = req.body;
      const updateProduct = await database.Products.update({
        name,
        price,
        flavor,
        complement,
        image,
        type, 
        sub_type,
        createdAt: new Date(),
        updateAt: new Date()
      },
        {
          where: {
            id: Number(productId)
          }
        }
      );
      return res.status(200).json(updateProduct);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível atualizar o produto" });
    }
  }

  static async deleteProduct (req, res) {
    try {
      const deleteProduct = await models.Products.destroy({
        where: {
          id: req.params.productId
        }
      });
      return res.status(200).json(deleteProduct);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível deletar o produto" });
    }
  }

}

module.exports = ProductsController