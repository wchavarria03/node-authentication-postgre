
module.exports = require('../../db/models').Admins;

// var bcrypt = require('bcrypt');

// var user = {
//   id: 1,
//   name: 'Walter',
//   email: 'wchavarria03@gmail.com',
//   username:'wchavarria03',
//   password: 'test'
// };
//
// var UserSchema = {
//   findById: function(id) {
//     if(user.email === id) {
//       return user;
//     }
//     return null;
//   },
//   find: function() {
//     return [user];
//   },
//   findOne: function(username) {
//     if (username.username === user.username) {
//       return user;
//     }
//     return null;
//   }
// };
//
// UserSchema.methods = {
//   //check the password on signin
//   authenticate: function(plainTextPword){
//     return bcrypt.compareSync(plainTextPword, this.encryptPassword(user.password));
//   },
//
//   encryptPassword: function(plainTextPword){
//     if(!plainTextPword){
//       return '';
//     } else {
//       var salt = bcrypt.genSaltSync(10);
//       return bcrypt.hashSync(plainTextPword, salt);
//     }
//
//   }
// };
//
// module.exports = UserSchema;