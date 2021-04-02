const models = require('../db/models')

const getAllProducts = async (req, res, next) => {
  try {
    const users = await models.Products.findAll();
    res.status(200).json(users);
  } catch (err){
    next(err)
  } 
}

const getProductId = async (req, res, next)=> {
  try {
    const users = await models.Products.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err)
    }
}

const postProduct = async (req, res, next) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  if( name == null || price == null || type == null || sub_type == null){
    return res.status(400).json({ status: "review object" })
  }
  if( name == '' || price == '' || type == '' || sub_type == ''){
    return res.status(400).json({ status: "Fill empty fields." })
  }
  
  try {
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
    res.status(201).json(user);
  } catch(err){
    next(err);
  }
}

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