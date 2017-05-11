const Teachers = require('./teachers-model');

module.exports = {
  params(req, res, next, id) {
    Teachers
      .findById(id)
      .then(teachers => {
        if (teachers) {
          req.teachers = teachers;
          next();
        } else {
          next(new Error('No Teachers found'))
        }
      })
      .catch(teachers => next(new Error('No Teachers found')));
  },
  get(req, res) {
    return Teachers
      .findAll()
      .then(teachers => res.status(201).send(teachers))
      .catch(teachers => res.status(400).send(teachers));
  },
  getOne(req, res) {
    res.json({teachers: req.teachers});
  },
  post(req, res) {
    return Teachers
      .create({
        name: req.body.name,
        identifier: req.body.identifier
      })
      .then(teachers => res.status(201).send(teachers))
      .catch(teachers => res.status(400).send(teachers));
  }
};