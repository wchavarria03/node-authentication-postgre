/**
 * Created by Walter on 04/04/2016.
 */
const User = require('./userModel');
const _ = require('lodash');
const signToken = require('../auth/auth').signToken;

exports.params = (req, res, next, id) => {
  const user = User.findById(id);
  if(user){
    req.user = user;
    next();
  } else {
    next(new Error('No User with that id'))
  }
};

exports.get = (req, res, next) => {
  res.json({'users': User.find()});
};

exports.getOne = (req, res, next) => {
  res.json({'user': req.user});
};