// aqui vai o código que acessa o banco de dados
const get = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Get Users");
};

const getId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request GetId Users");
};

const post = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Post Users");
};

const putId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Put Users");
};

const deleteId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)");
  res.send("Request Delete Users");
};

module.exports = {
  get, getId, putId, post, deleteId,
};
