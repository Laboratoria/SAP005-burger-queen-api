// aqui vai o código que acessa o banco de dados

// const getAllExamples = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)")
//   res.send("Request feita")
// }

// module.exports = { getAllExamples }
let users = require('./users.json')

const getAllUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send(users)
}

const getUserById = (req, res) => {
  let id = users.usuarios.filter(function(val){
    console.log(val.uid, req.params.uid)
    return val.uid === Number(req.params.uid);
  });
  res.send(id);
}



module.exports = {
  getAllUsers,
  getUserById,
  createNewUser
}