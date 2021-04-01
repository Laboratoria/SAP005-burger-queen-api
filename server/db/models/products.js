/* eslint-disable no-unused-vars */
/* eslint-disable strict */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
'use strict';
const {
  Model,
// eslint-disable-next-line import/newline-after-import
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  // eslint-disable-next-line no-extra-semi
  };
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
// eslint-disable-next-line eol-last
};