'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.User,
        {
          foreignKey: "id"
        })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};