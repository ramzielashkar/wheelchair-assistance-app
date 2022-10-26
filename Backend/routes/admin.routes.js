const {Router} = require('express');
const { addUser, login, getServiceProviders, getBannedServiceProviders, toggleActiveClient } = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.post('/login', login);
router.post('/addUser', adminMiddleware, addUser);
router.get('/services', adminMiddleware, getServiceProviders);
router.get('/services/banned', adminMiddleware, getBannedServiceProviders);
router.put('/banClient/:id', adminMiddleware, toggleActiveClient);


module.exports = router