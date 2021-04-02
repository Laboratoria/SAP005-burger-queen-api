const modelsDb = require("../db/models");

    const getAllUsers = async (req, res) => {
    try {
      const { name, email, password, role, restaurant } = req.body;
      const user = await modelsDb.Users.create({
        name,
        email,
        password,
        role,
        restaurant,
      });
      res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const getUserId = async (req, res) => {
    try {
      const userAll = await modelsDb.Users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(userAll);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const postUsers = async (req, res) => {
    const id = req.params.id;
    try {
      const user = await modelsDb.Users.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const putUsers = async (req, res) => {
    const userId = req.params.id;
    try {
      await modelsDb.Users.update(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
        {
          where: {
            id: userId,
          },
        }
      );
      res.send("Atualizou dados!");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  const deleteUsers = async (req, res) => {
    const userId = req.params.id;
    try {
      await modelsDb.Users.destroy({
        where: {
          id: userId,
        },
      });
      res.send("Usuário excluído!");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

module.exports = {
  getAllUsers,
  getUserId,
  postUsers,
  putUsers,
  deleteUsers
};