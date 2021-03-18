/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
// aqui vai o código que acessa o banco de dados
// products
const getProducts = (req, res) => {
  res.send('Request users');
};

const getProductsId = (req, res) => {
  const id = req.params.productid;
  // eslint-disable-next-line no-self-compare
  id === 'ola' ? res.send({ messagem: 'Request uid products feita', productid: id }) : res.send({ messagem: 'id products invalido' });
};

const postProducts = (req, res) => {
  res.send('Request post products');
};

const putProducts = (req, res) => {
  res.send('Request put products');
};

const deleteProducts = (req, res) => {
  res.send('Request delete products');
};

module.exports = {
  getProducts,
  getProductsId,
  postProducts,
  putProducts,
  deleteProducts,
};
