// aqui vai o código que acessa o banco de dados

const { restart } = require("nodemon")
const { Association } = require("sequelize/types")

const dataBase = require("../db/models")
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
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await dataBase.Users.findAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(400).json({ error : err.message })
  }
}
console.log(bancoDadosUser)

//Criar Usuário ---------------------- ok
const postUser = async (req, res) => {
  const newUser = req.body;
  try {
    const createdUser = await dataBase.Users.create(newUser);
    return res.status(201).json(createdUser)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
//Pegar usuário por ID
const getUserId = (req, res) => {
  const id = Number(req.params.id);
  const data = bancoDadosUser.filter(item => item.id === id)
  console.log("get id ok")
  res.status(200).send(data)
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