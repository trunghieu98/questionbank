'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam_Question.init({
    Id_quesstion: DataTypes.INTEGER,
    Id_exam: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exam_Question',
  });
  Exam_Question.associate=function(models){
    Exam_Question.belongsTo(models.Quesstion,{as: 'Id_Quesstion', foreignKey :  'Id_quesstion',onDelete: 'cascade', onUpdate:'cascade'});
    Exam_Question.belongsTo(models.Exam,{as: 'Id_Exam', foreignKey :  'Id_exam',onDelete: 'cascade', onUpdate:'cascade'});
    
};
  return Exam_Question;
};