const {Router} = require('express');
const { addUser, login, getServiceProviders } = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.post('/login', login);
router.post('/addUser', adminMiddleware, addUser);
router.get('/services', adminMiddleware, getServiceProviders);

module.exports = router