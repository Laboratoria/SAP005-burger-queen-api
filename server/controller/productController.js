const models = require('../db/models')


//Pegar todos os usuários ---------------------- ok
const getAllProducts = async (req, res, next) => {
  try {
    const users = await models.Products.findAll();
    res.status(200).json(users);
  } catch (err){
    next(err)
  } 
}

//Pegar produto por ID -------------------ok
const getProductId = async (req, res, next)=> {
  try {
    const users = await models.Products.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err);
    }
}

//Criar Produto ---------------------- ok
const postProduct = async (req, res, next) => {
  try {
    const { name, price, flavor, complement, image, type, sub_type } = req.body;
    const user = await models.Products.create({
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(200).json(user);
  } catch(err){
    next(err);
  }
}
//editar Produto
const updateProduct = async (req, res, next) => {
  try {
    const {id, name, price, flavor, complement, image, type, sub_type } = req.body;
    const users = await models.Products.update(
      { 
        id,
        name, 
        price, 
        flavor, 
        complement, 
        image,
        type,
        sub_type
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

//Deletar Produto ---------------------- ok
const deleteProducts = async (req, res, next) => {
  try {
    const users = await models.Products.destroy({
      where: 
      {id:req.params.id}
    });
    return res.json(users);
  } catch(err) {
    next(err);
  }
}


module.exports = { getAllProducts, postProduct, deleteProducts, getProductId, updateProduct}