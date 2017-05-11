const Admin = require('./admin-model');

module.exports = {
  params(req, res, next, id) {
    Admin
      .findById(id)
      .then(admin => {
        if (admin) {
          req.admin = admin;
          next();
        } else {
          next(new Error('No Admin found'))
        }
      })
      .catch(admin => next(new Error('No Admin found')));
  },
  get(req, res) {
    return Admin
      .findAll()
      .then(admin => res.status(201).send(admin))
      .catch(admin => res.status(400).send(admin));
  },
  getOne(req, res) {
    res.json({admin: req.admin});
  },
  post(req, res) {
    return Admin
      .create({
        name: req.body.name,
        identifier: req.body.identifier,
        username: req.body.username,
        password: Admin.build().encryptPassword(req.body.password)
      })
      .then(admin => res.status(201).send(admin))
      .catch(admin => res.status(400).send(admin));
  }
};
