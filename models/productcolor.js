// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class ProductColor extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   ProductColor.init({
//     imagepath: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'ProductColor',
//   });
//   return ProductColor;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const ProductColor = sequelize.define('ProductColor', {
    imagepath: DataTypes.TEXT,
    
    },{});
    ProductColor.associate = function(models) {
      ProductColor.belongsTo(models.Product,{foreignkey:'productId'});
      ProductColor.belongsTo(models.Color,{foreignkey:'colorId'});
  };
  return ProductColor;
};