/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
// aqui vai o código que acessa o banco de dados
// orders
const getOrders = (req, res) => {
  res.send('Request orders');
};

const getOrdersId = (req, res) => {
  const id = req.params.orderId;
  // eslint-disable-next-line no-self-compare
  id === 'ola' ? res.send({ messagem: 'Request uid orders feita', orderId: id }) : res.send({ messagem: 'id orders invalido' });
};

const postOrders = (req, res) => {
  const order = {
    id: req.body.id,
    client_name: req.body.client_name,
    user_id: req.body.user_id,
    table: req.body.table,
    status: req.body.status,
  };
  res.send('Request post orders');
};

const putOrders = (req, res) => {
  res.send('Request put orders');
};

const deleteOrders = (req, res) => {
  res.send('Request delete orders');
};

module.exports = {
  getOrders,
  getOrdersId,
  postOrders,
  putOrders,
  deleteOrders,
};
