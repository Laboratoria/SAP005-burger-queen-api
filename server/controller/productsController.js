const modelsDatabase = require("../db/models")

class ProductsController {
	static async getProducts(req, res) {
		const getProducts = await modelsDatabase.Products.findAll()
		return res.status(200).json(getProducts)
	}

	static async getIdProducts(req, res) {
		const getIdProducts = await modelsDatabase.Products.findAll({
			where: { id: Number(req.params) }
		});
		return res.status(200).json(getIdProducts)
	}

	static async postProducts(req, res) {
		const postProducts = await modelsDatabase.Products.create(req.body)
		res.status(201).json(postProducts)
	}

	static async putProducts(req, res) {
		const putProducts = await modelsDatabase.Products.update({
			name: req.body.name,
			price: req.body.price,
			flavor: req.body.flavor,
			complement: req.body.complement,
			image: req.body.image,
			sub_type: req.body.sub_type
		}, {
			where: {id: req.params.id}
		})
		res.status(200).json(putProducts)
	}

	static async deleteProducts(req, res) {
		const deleteProducts = await modelsDatabase.Products.destroy({
			where: {id: Number(req.params)
			}
		});
		return res.status(201).json(deleteProducts)
	}

}

module.exports = ProductsController

