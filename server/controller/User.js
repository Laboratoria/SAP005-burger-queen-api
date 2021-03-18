/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
// aqui vai o código que acessa o banco de dados

// Users
const getUsers = (req, res) => {
  res.send('Request users');
};

const getUsersUid = (req, res) => {
  const id = req.params.uid;
  // eslint-disable-next-line no-self-compare
  id === 'ola' ? res.send({ messagem: 'Request uid users feita', uid: id }) : res.send({ messagem: 'id invalido' });
};

const posttUsers = (req, res) => {
  res.send('Request post users');
};

const putUsers = (req, res) => {
  res.send('Request put users');
};

const deleteUsers = (req, res) => {
  res.send('Request delete users');
};

module.exports = {
  getUsers,
  getUsersUid,
  posttUsers,
  putUsers,
  deleteUsers,
};
