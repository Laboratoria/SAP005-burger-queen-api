// aqui vai o código que acessa o banco de dados

const { restart } = require("nodemon")

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
const getAllUsers = (req, res) => {
  res.send(bancoDadosUser)
  
}
console.log(bancoDadosUser)

//Pegar usuário por ID -------------------ok
const getUserId = (req, res)=> {
  let id = Number(req.params.id)
  const arrayFiltered = bancoDadosUser.filter(data => data.id === id)
  res.status(200).send(arrayFiltered)
}

//Criar Usuário ---------------------- ok
const postUser = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    bancoDadosUser.push(body);
    return res.status(201).send(body);
  }
}
//Alterar usuário
const updateUser = (req, res) => {
  console.log("alterar user ok")
  res.send("alterar user ok")
}

//Deletar usuário ---------------------- ok
const deleteUsers = (req, res) => {
  let id = Number(req.params.id)
  const arrayFiltered1 = bancoDadosUser.filter(data => data.id != id)
  console.log(arrayFiltered1)
  res.status(200).send(arrayFiltered1)
}


module.exports = { getAllUsers, postUser, deleteUsers, getUserId, updateUser}