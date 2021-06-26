// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Product.init({
    // name: DataTypes.STRING,
    // price: DataTypes.DECIMAL,
    // imagepath: DataTypes.TEXT,
    // thumnailPath: DataTypes.TEXT,
    // availability: DataTypes.BOOLEAN,
    // summary: DataTypes.TEXT,
    // description: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Product',
//   });
//   return Product;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imagepath: DataTypes.TEXT,
    thumnailPath: DataTypes.TEXT,
    availability: DataTypes.BOOLEAN,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT
    },{});
    Product.associate = function(models) {

    Product.belongsTo(models.Category,{foreignkey:'CategoryId'});
    Product.belongsTo(models.Brand,{foreignkey:'brandId'});
    Product.hasMany(models.ProductColor,{foreignkey:'productId'});
    Product.hasMany(models.ProductSpecification,{foreignkey:'productId'});
    Product.hasMany(models.Comment, {foreignkey:'productId'});
    Product.hasMany(models.Review, {foreignkey:'productId'});
  };
  return Product;
};