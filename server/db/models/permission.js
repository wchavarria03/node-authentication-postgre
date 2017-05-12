'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permission', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isActive: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{
    classMethods: {
      associate: function(models) {
        this.hasMany(models.User);
      }
    }
  });
};