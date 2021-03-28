/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line strict
'use strict';

const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  // eslint-disable-next-line no-extra-semi
  };
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
// eslint-disable-next-line eol-last
};