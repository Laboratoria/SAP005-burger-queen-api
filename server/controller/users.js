const database = require('../db/models');

const { Users } = database;

class UsersController {
  static async getAllUsers(_, res) {
    try {
      const users = await Users.findAll({
        attributes: { exclude: ['password'] },
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getUser(req, res) {
    try {
      const user = await Users.findAll({
        where: { id: req.params.userId },
        attributes: { exclude: ['password'] },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async createNewUser(req, res) {
    try {
      const newUser = await Users.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      await Users.update(
        {
          name: req.body.name,
          password: req.body.password,
          role: req.body.role,
        },
        { where: { id: req.params.userId } },
      );

      const updatedUser = await Users.findAll({
        where: { id: req.params.userId },
        attributes: { exclude: ['password'] },
      });
      return res.status(202).json(updatedUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      await Users.destroy({
        where: { id: req.params.userId },
      });
      return res.status(200).json('The user was deleted successfully.');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UsersController;
