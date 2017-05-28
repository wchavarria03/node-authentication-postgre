'use strict';
const bcrypt = require('bcrypt');
const Inventory = require('./inventory');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    underscored: true,
    classMethods: {
      associate: function (models) {
        this.hasMany(models.Inventories);
        // this.belongsToMany(models.Inventories, {
        //   through: 'UserInventory',
        //   foreignKey: 'id'
        // });
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

  return Users;
};
