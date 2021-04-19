'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamDetails_Quesstion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ExamDetails_Quesstion.init({
    Id_examdetails: DataTypes.INTEGER,
    Id_quesstion: DataTypes.INTEGER,
    Stt_answer: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'ExamDetails_Quesstion',
  });
  ExamDetails_Quesstion.associate=function(models){
    ExamDetails_Quesstion.belongsTo(models.Quesstion,{as: 'Id_Quesstion', foreignKey :  'Id_quesstion', onDelete: 'cascade', onUpdate:'cascade'});
    ExamDetails_Quesstion.belongsTo(models.ExamDetails,{as: 'Id_Examdetails', foreignKey :  'Id_examdetails',  onDelete: 'cascade', onUpdate:'cascade'});
    
};
  return ExamDetails_Quesstion;
};