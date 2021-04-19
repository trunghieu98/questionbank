'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Image.init({
    Url_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  Image.associate=function(models){
    Image.hasMany(models.Image_Quesstion,{as: 'Id_Image', foreignKey :  'Id_image'});
};
  return Image;
};