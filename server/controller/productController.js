const models = require('../db/models')


//Pegar todos os usuários ---------------------- ok
const getAllProducts = (req, res, next) => {
  try {
    const users = models.Products.findAll();
    res.status(200).json(users);
  } catch (err){
    next(err)
  } 
}

//Pegar produto por ID -------------------ok
const getProductId = (req, res)=> {
  try {
    const users = models.Products.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err);
    }
}

//Criar Produto ---------------------- ok
const postProduct = (req, res, next) => {
  try {
    const { name, price, flavor, complement, image, type, sub_type } = req.body;
    const user = models.Products.create({
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
//Criar Produto
const updateProduct = (req, res, next) => {
  try {
    const {id, name, email, password, role, restaurant } = req.body;
    const users = models.Products.update(
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
const deleteProducts = (req, res, next) => {
  try {
    const users = models.Products.destroy({
      where: 
      {id:req.params.id}
    });
    return res.json(users);
  } catch(err) {
    next(err);
  }
}


module.exports = { getAllProducts, postProduct, deleteProducts, getProductId, updateProduct}