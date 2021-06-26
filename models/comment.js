// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Comment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Comment.init({
//     message: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Comment',
//   });
//   return Comment;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      message: DataTypes.TEXT
    },{});
    Comment.associate = function(models) {

    Comment.belongsTo(models.User,{foreignkey: 'userId'});
    Comment.belongsTo(models.Product,{foreignkey: 'productId'});
    Comment.belongsTo(models.Comment,{as: 'ParentComment', foreignkey:'parentCommentId'});
    Comment.hasMany(models.Comment,{as: 'SubComments', foreignkey:'parentCommentId'});
  };
  return Comment;
};