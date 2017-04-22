const router = require('express').Router();
const controller = require('./admin-controller');
const auth = require('../auth/auth');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post);


router.route('/:id')
  .get(checkUser, controller.getOne);

module.exports = router;