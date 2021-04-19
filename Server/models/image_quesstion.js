'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image_Quesstion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Image_Quesstion.init({
    Id_image: DataTypes.INTEGER,
    Id_quesstion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image_Quesstion',
  });
  Image_Quesstion.associate=function(models){
    Image_Quesstion.belongsTo(models.Image,{as: 'Id_Image', foreignKey :  'Id_image',onDelete: 'cascade', onUpdate:'cascade'});
    Image_Quesstion.belongsTo(models.Quesstion,{as: 'Id_Quesstion', foreignKey :  'Id_quesstion',onDelete: 'cascade', onUpdate:'cascade'});
    
};
  return Image_Quesstion;
};