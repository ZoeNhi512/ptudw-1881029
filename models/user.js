// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     fullname: DataTypes.STRING,
//     avatarPath: DataTypes.TEXT,
//     isAdmin: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

'use strict';
  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
       username: DataTypes.STRING,
       password: DataTypes.STRING,
       email: DataTypes.STRING,
       phone: DataTypes.STRING,
       fullname: DataTypes.STRING,
       avatarPath: DataTypes.TEXT,
       isAdmin: DataTypes.BOOLEAN
    },{});
    User.associate = function(models) {

      User.hasMany(models.Comment, {foreignkey:'userId'});
      User.hasMany(models.Review, {foreignkey:'userId'});
  };
  return User;
};