// aqui vai o código que acessa o banco de dados

const database = require('../db/models');

class UsersController {
  static async getUsers(_, res) {
    try {
      const users = await database.Users.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: 'ocorreu um erro' });
    }
  }

  static async createUser(req, res) {
    const { body } = req;
    body.createdAt = new Date();
    body.updatedAt = new Date();

    const user = await database.Users.create(body);
    return res.status(200).json(user);
  }

  static async getUserById(req, res) {
    const user = await database.Users.findByPk(req.params.id);
    return res.status(200).json(user);
  }

  static async updateUser(req, res) {
    const { body } = req;
    body.updatedAt = new Date();

    await database.Users.update(body,
      {
        where: {
          id: req.params.id,
        },
      });

    return UsersController.getUserById(req, res);
  }

  static async deleteUser(req, res) {
    const user = await database.Users.findByPk(req.params.id);
    await database.Users.destroy(
      {
        where: {
          id: req.params.id,
        },
      },
    );

    return res.status(200).json(user);
  }
}

module.exports = UsersController;
