/* eslint-disable semi */
const db = require('../db/models');

const getAllUsers = (req, res) => {
  db.Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};

const getUserId = (req, res) => {
  db.Users.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};

const usersPost = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, email, password, role, restaurant } = req.body;
  db.Users.create({
    name,
    email,
    password,
    role,
    restaurant,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json({
        // eslint-disable-next-line quotes
        message: "Não foi possível processar a operação",
      // eslint-disable-next-line comma-dangle
      })
    // eslint-disable-next-line function-paren-newline
    );
};

const usersPut = (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, email, password, role, restaurant } = req.body;
  db.Users.update(
    {
      name,
      email,
      password,
      role,
      restaurant,
    },
    // eslint-disable-next-line comma-dangle
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.status(200).json({
        // eslint-disable-next-line quotes
        message: "Dados atualizados!",
      });
    })
    .catch(() => {
      res.json({
        // eslint-disable-next-line quotes
        message: "Deu ruim!",
      });
    });
};
const usersDelete = (req, res) => {
  db.Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        // eslint-disable-next-line quotes
        message: "Deletado!",
      });
    })
    .catch(() => {
      res.json({
        // eslint-disable-next-line quotes
        message: "Deu ruim!",
      });
    });
};

// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line no-multi-spaces
// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line semi
module.exports = {
  // eslint-disable-next-line indent
 getAllUsers, getUserId, usersPost, usersPut, usersDelete,
};
