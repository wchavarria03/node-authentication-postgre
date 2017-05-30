const signToken = require('./auth').signToken;

exports.signin = (req, res, next) => {
  // Create a token and send it back for the client to consume
  res.json({
    token: signToken(req.user.id),
    userId: req.user.id
  });
};