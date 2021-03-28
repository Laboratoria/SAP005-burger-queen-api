const database = require("../db/models")
const models = require("../db/models")

class UsersController {
  static async getAllUsers(req, res) {
    try {
      const getUsers = await database.User.findAll()
      return res.status(200).json(getUsers);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível encontrar os usuários" });
    }
  }

  static async getUserById(req, res) {
    const { uid } = req.params
    try {
      const userId = await database.User.findAll({
        where: {
          id: Number(uid)
        }
      });
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível encontrar o usuário" });
    }
  }

  static async createUser(req, res) {
    try {
      const { userName, email, password, role, restaurant } = req.body;
      const createUser = await models.User.create({
        userName,
        email,
        password,
        role,
        restaurant,
        createdAt: new Date(),
        updateAt: new Date()
      })
      return res.status(200).json(createUser);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível criar um usuário" });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id, userName, email, password, role, restaurant } = req.body;
      const updateUser = await models.User.update({
        id,
        userName,
        email,
        password,
        role,
        restaurant
      },
        {
          where: {
            id: req.params.id
          }
        }
      );
      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível atualizar o usuário" });
    }
  }

  static async deleteUser (req, res) {
    try {
      const deleteUser = await models.User.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).json(deleteUser);
    } catch (error) {
      return res.status(400).json({ error: "Não foi possível deletar o usuário" });
    }
  }
}

module.exports = UsersController