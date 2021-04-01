const models = require('../db/models')


//Pegar todos ---------------------- ok
const getAllOrders = async (req, res, next) => {
    try {
      const users = await models.Orders.findAll();
      res.status(200).json(users);
    } catch (err){
      next(err)
    } 
}


//Pegar por ID -------------------ok
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

//Criar  ---------------------- ok
const postOrder = async (req, res, next) => {
  try {
    const { user_id, client_name, table, status, processedAt } = req.body;
    const user = await models.Orders.create({
      user_id,
      client_name,
      table,
      status,
      processedAt,
    })
    res.status(200).json(user);
  } catch(err){
    next(err);
  }
}
//atualizar
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

//Deletar  ---------------------- ok
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