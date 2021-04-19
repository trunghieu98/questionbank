'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Teacher.init({
    Id_subject: DataTypes.INTEGER,
    Id_exam_subject: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    idteacher: DataTypes.STRING,
    Dob: DataTypes.DATE,
    Gender: DataTypes.STRING,
    Address: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  Teacher.associate=function(models){
    Teacher.belongsTo(models.Subject,{as: 'Id_Subject', foreignKey :  'Id_subject'});
    Teacher.hasMany(models.Position_Teacher,{as:  'Id_Position', foreignKey:  'Id_position'});
    Teacher.hasMany(models.Quesstion,{as: 'Id_Teacher', foreignKey:  'Id_teacher'});
    
  };
  return Teacher;
}