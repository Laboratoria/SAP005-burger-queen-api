/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_name: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      table: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // Products: {
      //   id: {
      //     allowNull: false,
      //     autoIncrement: true,
      //     primaryKey: true,
      //     type: Sequelize.INTEGER,
      //   },
      //   name: {
      //     type: Sequelize.STRING,
      //   },
      //   flavor: {
      //     type: Sequelize.STRING,
      //   },
      //   complement: {
      //     type: Sequelize.STRING,
      //   },
      //   qtd: {
      //     type: Sequelize.INTEGER,
      //   },
      // },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  },
};
