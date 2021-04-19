'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade_exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Grade_exam.init({
    Id_student: DataTypes.STRING,
    diem: DataTypes.FLOAT,
    url: DataTypes.STRING,
    made: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grade_exam',
  });
  return Grade_exam;
};