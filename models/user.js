'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Comment);
    }
  }
  User.init({
    name: DataTypes.STRING,
    cell: DataTypes.NUMERIC,
    password: DataTypes.STRING,
    admin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};