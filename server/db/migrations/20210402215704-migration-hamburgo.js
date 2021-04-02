'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addConstraint('Orders',
      {
        fields: ['user_id'],
        type: 'foreign key',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
      )}
  },


  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addConstraint('Orders',
      {
        fields: ['user_id'],
        type: 'foreign key',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
      )}
  }

}



