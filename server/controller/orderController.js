const models = require('../db/models');

const getAllOrders = async (req, res) => {
  try {
    let resultOrders = await models.Orders.findAll({
      order: [['id', 'ASC']],
      include: [{
        model: models.Products,
        as: 'products',
        attributes: [
          'id', 'name', 'price', 'flavor', 'complement', 'image', 'type', 'sub_type'
        ],
        through: {
          model: models.ProductOrders,
          as: 'qtd',
          attributes: ['qtd']
        }
      }]
    });
    resultOrders = JSON.parse(JSON.stringify(resultOrders));

    const allOrders = resultOrders.map((order) => {
      const productsOrder = order.products.map((item) => ({
        ...item,
        qtd: item.qtd.qtd
      }))
      return {
        ...order,
        products: productsOrder
      }
    });
    return res.status(200).json(allOrders)
    } catch (err){
      next(err)
    } 
}

const getOrderId = async (req, res)=> {

  const { id } = req.params
  const checkOrder = await models.Orders.findByPk(id);
  if(!checkOrder){
    return res.status(404).json({ status: `order doesn't exist ${id}`})
  }
  try {
    let findId = await models.Orders.findOne({
      where: {id: req.params.id },
      include: [{
        model: models.Products,
        as: 'products',
        attributes: [
          'id', 'name', 'price', 'flavor', 'complement', 'image', 'type', 'sub_type'
        ],
        through: {
          model: models.ProductOrders,
          as: 'qtd',
          attributes: ['qtd']
        }
      }]
    })
    
    findId = findId.toJSON()
    
    const productsOrder = findId.products.map((item) => ({
      ...item,
      qtd: item.qtd.qtd,
    }))
    const returnById = {
      ...findId,
      products: productsOrder,
    }
    return res.status(200).json(returnById)
    } catch (err){
      next(err);
    }
}

const postOrder = async (req, res, next) => {
  const { user_id, client_name, table, products } = req.body;

  if( user_id == null || client_name == null || table == null|| products == null){
    return res.status(400).json({ status: "Verify object" })
  }
  if( user_id == '' || client_name == '' || table == '' || products == ''){
    return res.status(400).json({ status: "Fill empty fields." })
  }
  
  products.map(async (item) => {
    const product = await models.Products.findByPk(item.id);
    console.log(product)
    if (!product) {
      return res.status(404).json({ "error": "product doesn't exist"})
    }
  });

  try {
    const orderCreated = await models.Orders.create(req.body)
    req.body.products.map(async(item) => {
      const productOrder = {
        order_id: orderCreated.id,
        product_id: item.id,
        qtd: item.qtd
      }
      await models.ProductOrders.create(productOrder);
    })
    return res.status(201).json(orderCreated);
  } catch(err){
    next(res.status(400).json({ error : err.message }));
    
  }
}

const updateOrder = async (req, res, next) => {
  try {
    const {user_id, client_name, table, status, products } = req.body;
    const users = await models.Orders.update(
      { 
        user_id,
        client_name,
        table,
        status,
        products
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

const deleteOrder = async (req, res, next) => {
  try {
    const productsOrders = await models.ProductOrders.destroy({
      where: 
      {id:req.params.id}
    });
    const order = await models.Orders.destroy({
      where: 
      {id:req.params.id}
    })
    return res.status(200).json({ status: "Order deleted successfly!"})
  } catch(err) {
    next(err);
  }
}


module.exports = { getAllOrders, postOrder, deleteOrder, getOrderId, updateOrder}