'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Test.init({
    Id_exam: DataTypes.INTEGER,
    Id_student: DataTypes.INTEGER,
    Id_question: DataTypes.STRING,
    Point: DataTypes.FLOAT,
    Id_Examdetails: DataTypes.INTEGER,
    Time_start: DataTypes.STRING,
    Time_end: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });

  return Test;
};