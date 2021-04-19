  
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Topic.init({
    Id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    Id_es: DataTypes.INTEGER,
    Name_topic: DataTypes.STRING,
    Content_topic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  Topic.associate=function(models){
    Topic.belongsTo(models.Exam_Subject,{as: 'Id_Es',foreignKey: 'Id_es'});
    Topic.hasMany(models.Quesstion,{as: 'Id_Topic',foreignKey: 'Id_topic'});
  }

  return Topic;
};