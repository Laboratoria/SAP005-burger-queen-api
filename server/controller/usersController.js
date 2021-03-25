// aqui vai o código que acessa o banco de dados
const getUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Get Users");
};

const getIdUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request GetId Users");
};

const postUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Post Users");
};

const putIdUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Put Users");
};

const deleteIdUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Delete Users");
};

module.exports = {
  getUsers, getIdUsers, putIdUsers, postUsers, deleteIdUsers,
};
