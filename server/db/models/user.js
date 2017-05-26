'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    classMethods: {
      associate: function (models) {
        this.hasMany(models.permission);
      }
    },
    instanceMethods: {
      authenticate: function (plainTextPword) {
        return bcrypt.compareSync(plainTextPword, this.password);
      },
      encryptPassword: function(plainTextPword){
        return !plainTextPword ? '' : bcrypt.hashSync(plainTextPword, bcrypt.genSaltSync(10));
      }
    }
  });
};
