// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class ProductSpecification extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   ProductSpecification.init({
//     description: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'ProductSpecification',
//   });
//   return ProductSpecification;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const ProductSpecification = sequelize.define('ProductSpecification', {
      description: DataTypes.TEXT,
    
    },{});
    ProductSpecification.associate = function(models) {
      ProductSpecification.belongsTo(models.Product,{foreignkey:'productId'});
      ProductSpecification.belongsTo(models.Color,{foreignkey:'specificationrId'});
  };
  return ProductSpecification;
};