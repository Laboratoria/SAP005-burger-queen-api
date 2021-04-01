'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ProductOrders', {
      fields:['product_id'],
      type:'foreign key',
      references:{
        table:'Products',
        field:'id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ProductOrders', {
      fields:['product_id'],
      type:'foreign key',
      references:{
        table:'Products',
        field:'id'
      }
    });
  }
};