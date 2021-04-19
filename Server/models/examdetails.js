'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ExamDetails.init({
    Id_exam: DataTypes.INTEGER,
    Stt_exam: DataTypes.INTEGER,
    Content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ExamDetails',
  });
  ExamDetails.associate=function(models) {
    ExamDetails.hasMany(models. ExamDetails_Quesstion, {as: 'Id_Examdetails',foreignKey : 'Id_examdetails'})
  }
  return ExamDetails;
};