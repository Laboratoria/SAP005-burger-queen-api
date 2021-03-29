/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {}
  }
  Orders.init({
    client_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    table: DataTypes.STRING,
    status: DataTypes.STRING,
    processedAt: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    Products: [{
      name: DataTypes.STRING,
      flavor: DataTypes.STRING,
      complement: DataTypes.STRING,
    }],

  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
