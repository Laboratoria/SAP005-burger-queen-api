'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
    name: {
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name"
        }
      },
      type: Sequelize.STRING
    },  
    email: {
      allowNull: false,
      unique: {
        name: "users_email",
        msg: "Email already exist!"
      },
      validate: {
        isEmail: true
      },
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    role: {
      allowNull: false,
      type: Sequelize.STRING
    },
    restaurant: {
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
},

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
  }
};
