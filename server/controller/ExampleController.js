// aqui vai o código que acessa o banco de dados

const getAllExamples = (req, res) => {
  return res.json(["Maria","Marta","Joana"]);
}


module.exports = { getAllExamples }