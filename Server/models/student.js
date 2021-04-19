'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    Id_student:{
      allowNull: false,
      type: DataTypes.STRING
    },
    Id_class: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Dob: DataTypes.DATE,
    Gender: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};