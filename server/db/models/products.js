'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.hasMany(models.ProductOrders, {
        foreignKey: 'product_id',
      });
    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return products;
};