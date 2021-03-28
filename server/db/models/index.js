/* eslint-disable global-require */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-template */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable strict */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
'use strict';

const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/newline-after-import
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line no-path-concat
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  // eslint-disable-next-line arrow-body-style
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// eslint-disable-next-line eol-last
module.exports = db;