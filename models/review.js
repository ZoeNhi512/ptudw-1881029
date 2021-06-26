// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Review extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Review.init({
//     message: DataTypes.TEXT,
//     rating: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Review',
//   });
//   return Review;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      message: DataTypes.TEXT,
      rating: DataTypes.INTEGER
    },{});
    Review.associate = function(models) {

      Review.belongsTo(models.User, {foreignkey:'userId'});
      Review.belongsTo(models.Product, {foreignkey: 'productId'});
  };
  return Review;
};