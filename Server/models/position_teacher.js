  
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position_Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Position_Teacher.init({
    Id_pt: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Id_position: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Id_teacher: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Position_Teacher',
  });
  Position_Teacher.associate=function(models){
    Position_Teacher.belongsTo(models.Teacher,{as: 'Id_Teacher', foreignKey :  'Id_teacher'});
    Position_Teacher.belongsTo(models.Position,{as: 'Id_Position', foreignKey :  'Id_position'});
    
};
  return Position_Teacher;
};