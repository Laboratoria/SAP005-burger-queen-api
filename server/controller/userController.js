const models = require('../db/models')

const getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json(users);
  } catch (err){
    next(err)
  } 
}

const getUserId = async (req, res, next) => {
  try {
    const users = await models.User.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err);
    }
}

const postUser = async (req, res, next) => {
  const { name, email, password, role, restaurant } = req.body;

  if( name == null || email == null || password == null || role == null || restaurant == null){
    return res.status(400).json({ status: "review object" })
  }
  if( name == '' || email == '' || password == '' || role == '' || restaurant == ''){
    return res.status(400).json({ status: "Fill empty fields." })
  }
  try {
    const user = await models.User.create({
      name,
      email,
      password,
      role,
      restaurant,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(201).json(user);
  } catch(err){
    next(err);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const {id, name, email, password, role, restaurant } = req.body;
    const users = await models.User.update(
      { 
        id,
        name, 
        email, 
        password, 
        role, 
        restaurant 
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

const deleteUsers = async (req, res, next) => {
  try {
    const users = await models.User.destroy({
      where: 
      {id:req.params.id}
    });
    return res.json(users);
  } catch(err) {
    next(err);
  }
}

module.exports = { getAllUsers, postUser, deleteUsers, getUserId, updateUser}