'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ProductOrders', {
      fields:['order_id'],
      type:'foreign key',
      references:{
        table:'Orders',
        field:'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ProductOrders', {
      fields:['order_id'],
      type:'foreign key',
      references:{
        table:'Orders',
        field:'id'
      }
    });
  }
};