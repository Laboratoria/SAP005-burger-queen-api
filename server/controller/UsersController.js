// aqui vai o código que acessa o banco de dados

const users = [
  { id: 1, username: 'pedro', email: 'pedro@teste.com'},
]

const getAllUsers = (req, res) => {
  console.log("users")
  res.send(users)
}


/*module.exports = { getAllExamples }*/
module.exports = { getAllUsers }