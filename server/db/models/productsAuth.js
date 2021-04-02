const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductAuth extends Model {
    static associate(models) {
      ProductAuth.belongsTo(models.Orders, {
        foreignKey: 'order_id',
      });
      ProductAuth.belongsTo(models.Products, {
        foreignKey: 'product_id',
      });
    }
  }
  ProductAuth.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductAuth',
  });
  return ProductAuth;
};