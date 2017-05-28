const User = require('./user-model');

module.exports = {
  params(req, res, next, id) {
    User
      .findById(id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(new Error('No User found'))
        }
      })
      .catch(user => next(new Error('No User found')));
  },
  get(req, res) {
    return User
      .findAll()
      .then(user => res.status(201).send(user))
      .catch(user => res.status(400).send(user));
  },
  getOne(req, res) {
    res.json({user: req.user});
  },
  post(req, res) {
    return User
      .create({
        name: req.body.name,
        identifier: req.body.identifier,
        username: req.body.username,
        password: User.build().encryptPassword(req.body.password),
        email: req.body.email
      })
      .then(user => res.status(201).send(user))
      .catch(user => res.status(400).send(user));
  }
};
