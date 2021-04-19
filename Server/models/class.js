'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Class.init({
    Id_class: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    
    }, 
    Name: DataTypes.STRING,
    Id_Grade:{
      type: DataTypes.INTEGER,
    } 
    
  }, {
    sequelize,
    modelName: 'Class',
  });
   Class.associate = function(models) {
    Class.hasMany(models.Student, {as: 'Id_Class',foreignKey : 'Id_class'})
  };
  return Class;
};
