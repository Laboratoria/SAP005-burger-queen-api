const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id',
      }); // orders pertence ao user_id => (userModel)
      Orders.hasMany(models.ProductOrders, {
        foreignKey: 'order_id',
      }); // products tem muitas order_id => (productOrderModel)
      // (coluna que ta armazenada dentro do productOrderModel)
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