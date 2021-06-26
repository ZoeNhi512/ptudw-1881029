// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Specification extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Specification.init({
//     name: DataTypes.STRING,
//     summary: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Specification',
//   });
//   return Specification;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Specification = sequelize.define('Specification', {
      name: DataTypes.STRING,
      summary: DataTypes.TEXT,
    },{});
    Specification.associate = function(models) {
      Specification.hasMany(models.ProductSpecification, {foreignkey:'specificationId'});

  };
  return Specification;
};