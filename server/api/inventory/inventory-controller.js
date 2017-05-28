const Inventory = require('./inventory-model');
const User = require('../user/user-model');

module.exports = {
  params(req, res, next, user_id) {
    Inventory
      .find({
        where: {
          user_id: req.params.user_id,
          id: req.params.inventory_id
        }
      })
      .then(inventory => {
        if (inventory) {
          req.inventory = inventory;
          next();
        } else {
          next(new Error('No Inventory found'))
        }
      })
      .catch(inventory => next(new Error('No Inventory found')));
  },
  get(req, res) {
    return Inventory
      .findAll({
        where: {
          user_id: req.params.user_id,
        }
      })
      .then(function (inventory) {
          return res.status(201).send(inventory);
      })
      .catch(inventory => res.status(400).send(inventory));
  },
  getOne(req, res) {
    res.json({inventory: req.inventory});
  },
  post(req, res) {
    return Inventory
      .create({
        name: req.body.name,
        description: req.body.description,
        user_id: req.params.user_id
      })
      .then(inventory => res.status(201).send(inventory))
      .catch(inventory => res.status(400).send(inventory));
  },
  put(req, res) {
    return Inventory
      .update(
        {
          name: req.body.name,
          description: req.body.description
        }, {
          where: {
            user_id: req.params.user_id,
          },
          returning: true
        }
      )
      .then(inventory => res.status(201).send(inventory))
      .catch(inventory => res.status(400).send(inventory));
  }
};