// aqui vai o código que acessa o banco de dados

const { response } = require("express");
const { restart } = require("nodemon");
const { resolve } = require("path");
const { nextTick } = require("process");
const models = require('../db/models')

const bancoDadosUser = [
  {
    "id":1,
    "name": "Carol",
    "sobrenome": "Shimada",
  },
  {
    "id":2,
    "name": "Rayan",
    "sobrenome": "Salewski",
  },
  {
    "id":3,
    "name": "Joana",
    "sobrenome": "Santos",
  }
]

//Pegar todos os usuários ---------------------- ok
const getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll();
    //res.status(200).send(users)
    res.status(200).json(users);
  } catch (err){
    next(err)
  }
}


//Pegar usuário por ID
const getUserId = async (req, res, next) => {
  try{
    const users = await models.User.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    //res.status(200).send(users)
    } catch (err){
      next(err);
    }
}

//Criar Usuário ---------------------- ok
const postUser = async (req, res, next) => {
  try{
    const { name, email, password, role, restaurant } = req.body;
    const user = await models.User.create({
      name,
      email,
      password,
      role,
      restaurant,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(200).json(user);
  } catch(err){
    next(err)
  }
}
//Alterar usuário
const updateUser = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Update UserId")
}

//Deletar usuário ---------------------- atual
const deleteUsers = (req, id) => {
  var result = bancoDadosUser.filter(function(el) {
    return el.id == id;
  });
    
  for(var elemento of result){
    var index = bancoDadosUser.indexOf(elemento);    
    bancoDadosUser.splice(index, 1);
  }
}


module.exports = { getAllUsers, postUser, deleteUsers, getUserId, updateUser}