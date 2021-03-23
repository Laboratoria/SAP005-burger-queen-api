const { User }  = require("../db/models/index");

const bcrypt = require("bcrypt");

const UserController = {
  getAllUser(req, res, next) {
    User.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  createUser(req, res, next) {
    //console.log(req)
    //res.status(200);
    const { email, password, role, restaurant, username } = req.body;
    //console.log(email)
    User.create({
      email,
      password: bcrypt.hashSync(password, 10),
      role,
      restaurant,
      username
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },

  getUserById(req, res, next) {
    let uid = req.params.id;
    User.findOne({
      where: {
        id: uid
      }
    })
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

}

module.exports = UserController;