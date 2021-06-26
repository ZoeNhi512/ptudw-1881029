// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Brand extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Brand.init({
//     name: DataTypes.STRING,
//     summary: DataTypes.TEXT,
//     imagepath: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Brand',
//   });
//   return Brand;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
      name: DataTypes.STRING,
      summary: DataTypes.TEXT,
      imagepath: DataTypes.TEXT
    },{});
    Brand.associate = function(models) {
    Brand.hasMany(models.Product,{foreignkey:'brandId'});
  };
  return Brand;
};