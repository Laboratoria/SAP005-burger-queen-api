const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'products',
        foreignKey: 'order_id',
        otherKey: 'product_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
// eslint-disable-next-line eol-last
};