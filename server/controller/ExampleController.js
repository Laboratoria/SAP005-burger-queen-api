// aqui vai o código que acessa o banco de dados

const getAllExamples = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send({Resposta: "Request feita"})
}
const getUser = (req, res) => {
  console.log("User deu certo")
  res.send({Resposta: "Request User feita"})
}
module.exports = { getAllExamples, getUser }