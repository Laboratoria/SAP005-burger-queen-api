'user strict';
const{Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        static associate(models) {
            Orders.belongsTo(models.Users, {
                foreignKey: 'user_id',
            });
            Orders.hasMany(models.ProductOrders, {
                foreignKey: 'order_Id',
            });
        }
    }
    Orders.init({
        client_name: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        table: DataTypes.INTEGER,
        status: DataTypes.STRING,
        processedAt: DataTypes.STRING,
        createdAt: DataTypes.STRING,
        updatedAt: DataTypes.STRING,
        products: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Orders',
    });
    return Orders;
};
