const { User }  = require("../db/models/index");

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
    const { email, password, role, restaurant, name } = req.body;
    //console.log(email)
    User.create({
      email,
      password,
      role,
      restaurant,
      name
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },

}

module.exports = UserController;