const router = require('express').Router();
const controller = require('./userController');
const auth = require('../auth/auth');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
  .get(checkUser, controller.get);


router.route('/:id')
  .get(controller.getOne);

module.exports = router;