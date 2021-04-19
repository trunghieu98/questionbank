'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Answer.init({
    Id_quesstion: DataTypes.INTEGER,
    Content:DataTypes.TEXT,
    Diem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  });
  Answer.associate=function(models){
    Answer.belongsTo(models.Quesstion,{as: 'Id_Quesstion', foreignKey :  'Id_quesstion'});
  }
  return Answer;
};