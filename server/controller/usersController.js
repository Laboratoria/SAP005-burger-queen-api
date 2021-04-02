const modelsDatabase = require("../db/models");

class UsersController {
  static async getUsers(req, res) {
    const getUsers = await modelsDatabase.Users.findAll();
    return res.status(200).json(getUsers);
  }

  static async getIdUsers(req, res) {
    const getIdUsers = await modelsDatabase.Users.findAll({
      where: { id: Number(req.params) },
    });
    return res.status(200).json(getIdUsers);
  }

  static async postUsers(req, res) {
    const createUser = req.body;
    const postUsers = await modelsDatabase.Users.create(createUser);
    return res.status(201).json(postUsers);
  }

  static async putUsers(req, res) {
    const putUsers = await modelsDatabase.Users.update(
      {
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
      },
      {
        where: { id: Number(id) },
      }
    );
    return res.status(200).json(putUsers);
  }

  static async deleteUsers(req, res) {
    const deleteUsers = await modelsDatabase.Users.destroy({
      where: { id: Number(req.params) },
    });
    return res.status(200).json(deleteUsers);
  }
}

module.exports = UsersController
