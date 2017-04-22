const bcrypt = require('bcrypt');

const user = {
  id: 1,
  name: 'Walter',
  email: 'wchavarria03@gmail.com',
  username:'wchavarria03',
  password: 'test'
};

const UserSchema = {
  findById: (id) => {
    if(user.email === id) {
      return user;
    }
    return null;
  },
  find: () => {
    return [user];
  },
  findOne: (username) => {
    if (username.username === user.username) {
      return user;
    }
    return null;
  }
};

UserSchema.methods = {
  //check the password on signin
  authenticate: (plainTextPword) => {
    return bcrypt.compareSync(plainTextPword, this.encryptPassword(user.password));
  },

  encryptPassword: (plainTextPword) => {
    return !plainTextPword ? '' : bcrypt.hashSync(plainTextPword, bcrypt.genSaltSync(10));
  }
};

module.exports = UserSchema;