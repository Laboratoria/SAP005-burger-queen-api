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

const bancoDadosProduto = [
  {
    "id":1,
    "name": "Hamburger Simples",
    "flavor": "carne",
    "complement": "queijo",
  },
  {
    "id":2,
    "name": "Hamburger Simples",
    "flavor": "frango",
    "complement": "queijo",
  },
  {
    "id":3,
    "name": "Hamburger Simples",
    "flavor": "vegetariano",
    "complement": "queijo",
  }
]
//buscar dados

const getAllUsers = (req, res) => {
  res.send(bancoDadosUser)
  
}
console.log(bancoDadosUser)

// const getUserId = (req, res) => {
//   console.log("Id Ok")
//   res.send(bancoDadosUser)
// }

//inserir dados
const postUser = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else{
    bancoDadosUser.push(body);
    return res.status(201).send(body);
  }
}

module.exports = { getAllUsers, postUser}