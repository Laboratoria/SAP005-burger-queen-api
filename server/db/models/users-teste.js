const { DataTypes, Model } = require('sequelize');
const database = require('../index');

class UsersTeste extends Model {}

UsersTeste.init({
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurant: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  sequelize: database,
  modelName: 'Users',
});

module.exports = UsersTeste;
