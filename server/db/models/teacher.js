'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Teachers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    underscored: true,
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
};
