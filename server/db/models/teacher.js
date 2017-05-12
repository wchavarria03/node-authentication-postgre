'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
};
