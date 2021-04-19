  
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam_Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam_Subject.init({
    Id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Name_es: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exam_Subject',
  });
  Exam_Subject.associate=function(models){
    Exam_Subject.hasMany(models.Topic,{as: 'Id_Es',foreignKey: 'Id_es'});
  }
  return Exam_Subject;
};
