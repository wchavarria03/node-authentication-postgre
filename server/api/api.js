const router = require('express').Router();
const allowCrossOrigin = require('../middleware/crossOriginMiddleware');

router.use(allowCrossOrigin);
router.use('/users', require('./user/user-routes'));
router.use('/teachers', require('./teacher/teacher-routes'));
router.use('/signin', require('./auth/routes'));
module.exports = router;