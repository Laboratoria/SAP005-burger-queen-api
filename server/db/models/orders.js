const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id',
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
};
