const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../../config/config');
const checkToken = expressJwt({ secret: config.secrets.jwt });
const User = require('../user/user-model');
const messages = require('../../utils/errorMessages');

exports.decodeToken = () => {
  return (req, res, next) => {
    // so checkToken can see it. See follow the 'Bearer 034930493' format
    // so checkToken can see it and decode it

    if (req.headers && req.headers.hasOwnProperty('x-token')) {
      req.headers.authorization = 'Bearer ' + req.headers['x-token'];
    }

    // this will call next if token is valid
    // and send error if its not. It will attached
    // the decoded token to req.user
    checkToken(req, res, next);
  };
};

exports.getFreshUser = () => {
  return (req, res, next) => {
    User.findById(req.user._id)
      .then((user) => {
        if (!user) {
          // if no user is found it was not
          // it was a valid JWT but didn't decode
          // to a real user in our DB.
          res.status(400).send(
            {errors: [{status:400, message: messages.auth_unAuthorized.message, code: messages.auth_unAuthorized.code}]}
          );
        } else {
          // update req.user with fresh user from
          // stale token data
          req.user = user;
          next();
        }
      });
  }
};

exports.verifyUser = () => {
  return (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    // if no username or password then send
    if (!username || !password) {
      //next(new Error('You need a username and password'));
      res.status(400).send(
        {errors: [{status:400, message: messages.auth_needUserPass.message, code: messages.auth_needUserPass.code}]}
      );
      //res.status(400).send('You need a username and password');
      return;
    }

    // look user up in the DB so we can check
    // if the passwords match for the username
    User.findOne({where: {username: username}})
      .then((user) => {
        if (!user || !User.build({password: user.password}).authenticate(password)) {
          res.status(401).send(
            {errors : [{status:401, message: messages.auth_noUserFound.message, code: messages.auth_noUserFound.code}]}
          );
        } else {
          // if everything is good,
          // and call next so the controller
          // can sign a token from the req.user._id
          req.user = user;
          next();
        }
      })
  };
};

// util method to sign tokens on signup
exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresIn: config.expireTime}
  );
};