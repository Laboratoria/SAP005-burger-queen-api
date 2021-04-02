const models = require('../db/models');
const products = require('../db/models/products');


//Pegar todos os orders ---------------------- ok
const getAllOrders = async (req, res) => {
    try {
      const users = await models.Orders.findAll();
      res.status(200).json(users);
    } catch (err){
      next(err)
    } 
}


//Pegar orders por ID -------------------ok
const getOrderId = async (req, res)=> {
  try {
    const users = await models.Orders.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err);
    }
}

//Criar Produto ---------------------- ok
const postOrder = async (req, res, next) => {
  const { user_id, client, table, products } = req.body;

  products.map(async(item) => {
    const product = await models.Products.findByPk(item.id);
    console.log(product)
    if (!product) {
      return res.status(404).json({ "error": "produto não existe"})
    }
  });

  try {
    const createdOrder = await models.Orders.create(req.body)
    
    req.body.products.map(async(item) => {
      const product = await models.Products.findByPk(item.id);

      const productOrder = {
        order_id: createdOrder.id,
        product_id: item.id,
        qtd: item.qtd
      }

      await models.ProductOrders.create(productOrder);
    })

    return res.status(201).json(createdOrder);
  } catch(err){
    next(err);
  }
}
//update orders
const updateOrder = async (req, res, next) => {
  try {
    const {user_id, client_name, table, status } = req.body;
    const users = await models.Orders.update(
      { 
        user_id,
        client_name,
        table,
        status
      },
      {
        where:
        { id: req.params.id }
      } 
    )
    return res.json(users);
  } catch(err) {
    next(err);
  }
}

//Deletar orders ---------------------- ok
const deleteOrder = (req, res, next) => {
  try {
    const users = models.Orders.destroy({
      where: 
      {id:req.params.id}
    });
    return res.json(users);
  } catch(err) {
    next(err);
  }
}


module.exports = { getAllOrders, postOrder, deleteOrder, getOrderId, updateOrder}