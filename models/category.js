'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: DataTypes.STRING,
      summary: DataTypes.TEXT,
      imagepath: DataTypes.TEXT
    },{});
  Category.associate = function(models) {
    
  Category.hasMany(models.Product,{foreignkey:'categoryId'});
  };
  return Category;
};