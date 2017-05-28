const router = require('express').Router({mergeParams: true});
const controller = require('./inventory-controller');
const auth = require('../auth/auth');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('inventory_id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post);


router.route('/:inventory_id')
  .get(checkUser, controller.getOne)
  .put(checkUser, controller.put);

module.exports = router;