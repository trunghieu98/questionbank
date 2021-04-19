'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Level.init({
    Id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
  });
  Level.associate=function(models){
    Level.hasMany(models.Quesstion, {as: 'Id_Level',foreignKey : 'Id_level',onDelete: 'cascade', onUpdate:'cascade' })
  }
  return Level;
};