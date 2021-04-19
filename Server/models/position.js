'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Position.init({
    Name_position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Position',
  });
  Position.associate=function(models){
      Position.hasMany(models.Position_Teacher,{as: 'Id_Position', foreignKey :  'Id_position'});
  };
  return Position;
};