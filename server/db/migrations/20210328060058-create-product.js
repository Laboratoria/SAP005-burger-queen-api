/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      flavor: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      complement: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      price: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.INTEGER
      },
      image: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      type: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      subtype: {
        // eslint-disable-next-line comma-dangle
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        // eslint-disable-next-line comma-dangle
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        // eslint-disable-next-line comma-dangle
        type: Sequelize.DATE
      // eslint-disable-next-line comma-dangle
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  // eslint-disable-next-line comma-dangle
  }
// eslint-disable-next-line eol-last
};