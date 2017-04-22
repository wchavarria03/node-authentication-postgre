const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/admins', require('./admin/admin-routes'));
router.use('/signin', require('./auth/routes'));
module.exports = router;