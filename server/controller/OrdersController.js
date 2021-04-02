const modelsDb = require("../db/models");

const getAllOrders = async (req, res) => {
    const { products } = req.body;

    try {
      const findProductOrder = await Promise.all(
        products.map(async (product) => {
          if (!product) {
            return res.status(404).json("Produto não encontrado");
          }
          const qtd = product.qtd;

          let products_details = await modelsDb.Products.findByPk(product.id);
          products_details = products_details.toJSON();
          return { qtd, products_details };
        })
      );

      let createOrder = await modelsDb.Orders.create({
        user_id: req.params.id,
        client_name: req.body.client_name,
        table: req.body.table,
        status: "pending",
        processedAt: new Date(),
      });
      createOrder = createOrder.toJSON();

      const { user_id, client_name, table, status } = createOrder;

      findProductOrder.forEach(async (order) => {
        await modelsDb.ProductOrders.create({
          order_id: createOrder.id,
          product_id: order.products_details.id,
          qtd: order.qtd,
        });
      });

      let allProductsDetails = await Promise.all([
        {
          user_id,
          client_name,
          table,
          status,
          ...findProductOrder[0],
        },
      ]);
      allProductsDetails = await Promise.all(allProductsDetails);

      res.status(201).json(allProductsDetails);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const postOrders = async (req, res) => {
    try {
      let allOrders = await modelsDb.Orders.findAll({
        include: {
          model: modelsDb.Products,
          as: "products",
          attributes: [
            "id",
            "name",
            "flavor",
            "complement",
            "image",
            "type",
            "subtype",
            "price",
          ],
          through: {
            model: modelsDb.ProductsOrders,
            attributes: ["qtd"],
          },
        },
      });
      res.status(200).json(allOrders);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const getOrderId = async (req, res) => {
    const id = req.params.id;
    try {
      const order = await modelsDb.Orders.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const putOrders = async (req, res) => {
    const id = req.params.id;
    try {
      await modelsDb.Orders.update(
        {
          status: req.body.status,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send("Pedido atualizado com sucesso");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

const deleteOrders = async (req, res) => {
    const id = req.params.id;
    try {
      await modelsDb.Orders.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send("Pedido excluído com sucesso");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllOrders,
    getOrderId,
    postOrders,
    putOrders,
    deleteOrders
};