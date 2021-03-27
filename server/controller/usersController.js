/* eslint-disable linebreak-style */
// aqui vai o código que acessa o banco de dados
const userModel = require('../db/models/userModel');

module.exports = {
  all(req, res, next, error) {
    userModel.findAll({
      attr: {
        exclude: ['password'],
      },
    })
      .then((result) => { res.json(result); })
      .catch({
        error: {
          mensagem: error.message,
        },
      })
      .catch(next);
  },
  create(req, res, next) {
    const {
      name, email, password, role, restaurant,
    } = req.body;
    userModel.create({
      name, email, password, role, restaurant,
    })
      .then((result) => {
        res.status(201).json(result);
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
  update(req, res, next) {
    userModel.update({ name: req.body.name }, {
      where: { uid: req.params.uid },
    })
      .then((result) => { res.json(result); })
      .catch(next);
  },
  delete(req, res, next) {
    userModel.delete({
      where: { uid: req.params.uid },
    })
      .then((result) => { res.status(201).json(result); })
      .catch(next);
  },
};
