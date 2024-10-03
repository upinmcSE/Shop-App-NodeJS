'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      New.hasMany(models.NewDetail, {
        foreignKey:"new_id"
      })
    }
  }
  New.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'New',
    tableName: 'news',
    underscored: true
  });
  return New;
};