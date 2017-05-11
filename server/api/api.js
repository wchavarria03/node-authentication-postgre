const router = require('express').Router();
const allowCrossOrigin = require('../middleware/crossOriginMiddleware');

router.use(allowCrossOrigin);
router.use('/users', require('./user/userRoutes'));
router.use('/teachers', require('./teachers/teachers-routes'));
router.use('/admins', require('./admin/admin-routes'));
router.use('/signin', require('./auth/routes'));
module.exports = router;