// aqui vai o código que acessa o banco de dados

const db = require('../db/models');
const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await db.Users.findAll({ attributes: { exclude: ['password'] } });
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async getUserId(req, res) {
    try {
      const id = req.params;
      const user = await db.Users.findOne({
        attributes: { exclude: ['password'] },
        where: id,
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async postUsers(req, res) {
    try {
      const {
        name, email, password, role, restaurant,
      } = req.body;
      const user = await db.Users.create({
        name, email, password, role, restaurant,
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async putUsers(req, res) {
    try {
      const {
        name, email, password, role, restaurant,
      } = req.body;
      const id = req.params;
      await db.Users.update(
        {
          name, email, password, role, restaurant,
        },
        {
          where: id,
        },
      );
      res.status(200).send('dados alterados');
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
  async deleteUsers(req, res) {
    try {
      const id = req.params;
      await db.Users.destroy({
        where: id,
      });
      res.status(200).send('usuário deletado');
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = UserController;