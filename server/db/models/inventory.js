'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Inventories = sequelize.define('Inventories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    underscored: true,
    classMethods: {
      associate: function (models) {
        this.belongsTo(models.Users);
        // this.belongsToMany(models.Users, {
        //   through: 'UserInventory',
        //   foreignKey: 'id'
        // });
      }
    },
  });

  return Inventories;
};
