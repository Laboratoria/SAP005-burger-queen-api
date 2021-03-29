/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {}
  }
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.NUMBER,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
