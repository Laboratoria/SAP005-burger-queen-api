const database = require('../db/models');

class UsersController {
  static async getAllUsers(req, res) {
    const users = await database.Users.findAll();
    return res.status(200).json(users);
  }
}

// const createNewUser = (req, res) => {
//   const newUser = await Users.create({
//     name: 'Theresa Sar',
//     email: 'theresa@hamburgueriaipe.com.br',
//     role: 'hall',
//     restaurant: 'Hamburgueria Ipê',
//   }, {
//     fields: ['name', 'email', 'role']
//   })
// };

module.exports = UsersController;
