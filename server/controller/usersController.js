// aqui vai o código que acessa o banco de dados

const modelsDatabase = require("../db/models")


class UserController {
  static async getUsers(req, res){
    const getUsers = await modelsDatabase.User.findAll()
    return res.status(200).json(getUsers)
  }

  static async getIdUsers(req, res){
  const getIdUsers = await modelsDatabase.User.findAll({ 
    where: {id: Number (req.params)} 
    });
  return res.status(200).json(getIdUsers)
  }

  static async postUsers(req, res){
  const createUser = req.body;
  const postUsers = await modelsDatabase.User.create(createUser)
  return res.status(201).json(postUsers)
  }

  static async putUsers (req, res){
    const putUsers = await modelsDatabase.User.update({ 
      name: req.body.name, 
      password: req.body.password, 
      role: req.body.role }, {
      where: {id: Number (id)} 
    });
    return res.status(201).json(putUsers)
  }

  static async deleteUsers(req, res){
    const deleteUsers = await modelsDatabase.User.destroy({
      where: {id: Number(req.params)}
      });
    return res.status(201).json(deleteUsers)
  }
};

module.exports = {
  getUsers, getIdUsers, postUsers, putUsers, deleteUsers,
};
