/* eslint-disable linebreak-style */
// aqui vai o código que acessa o banco de dados
const userModel = require('../db/models/userModel');

module.exports = {
  listAllUsers(req, res, next) {
    userModel.findAll({
      attr: {
        exclude: ['password'],
      },
    })
      .then((result) => { res.json(result); })
      .catch(next);
  },
  createUser(req, res, next) {
    const {
      name, email, password, role, restaurant,
    } = req.body;
    userModel.createUser({
      name, email, password, role, restaurant,
    })
      .then((result) => {
        res.json(result);
      }).catch(next);
  },
  getUser(req, res, next) {
    userModel.findAll({
      where: { uid: req.params.uid },
      attr: { exclude: ['password'] },
    })
      .then((result) => { res.json(result); })
      .catch(next);
  },
  updateUser(req, res, next) {
    userModel.updateUser({ name: req.body.name }, {
      where: { uid: req.params.uid },
    })
      .then((result) => { res.json(result); })
      .catch(next);
  },
  deleteUser(req, res, next) {
    userModel.deleteUser({
      where: { uid: req.params.uid },
    })
      .then((result) => { res.json(result); })
      .catch(next);
  },
};
