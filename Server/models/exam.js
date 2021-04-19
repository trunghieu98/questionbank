'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam.init({
    Id_teacher: DataTypes.INTEGER,
    Id_exam_subject: DataTypes.INTEGER,
    Id_grade: DataTypes.INTEGER,
    Time: DataTypes.INTEGER,
    Pass: DataTypes.STRING,
    Note: DataTypes.STRING,
    stt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exam',
  });
    Exam.associate=function(models) {
      Exam.hasMany(models.Exam_Question, {as: 'Id_Exam',foreignKey : 'Id_exam'})
    }
  return Exam;
};