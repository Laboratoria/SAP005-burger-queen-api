/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductOrders extends Model {
    static associate(models) {
      ProductOrders.belongsTo(models.Orders, {
        foreignKey: 'order_id',
      }); // productOrders pertence a order_id => (ordersModel)
      ProductOrders.belongsTo(models.Products, {
        foreignKey: 'product_id',
      }); // productOrders pertence a product_id => (productsModel)
    }
  }
  ProductOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'ProductOrders',
  });
  return ProductOrders;
};
