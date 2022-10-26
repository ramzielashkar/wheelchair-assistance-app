const {Router} = require('express');
const { addUser, login, getServiceProviders, getBannedServiceProviders, toggleActiveClient, getUsersCount, getActiveClients, getBannedClients } = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.post('/login', login);
router.post('/addUser', adminMiddleware, addUser);
router.get('/services', adminMiddleware, getServiceProviders);
router.get('/services/banned', adminMiddleware, getBannedServiceProviders);
router.put('/banClient/:id', adminMiddleware, toggleActiveClient);
router.get('/count', adminMiddleware, getUsersCount);
router.get('/clients', adminMiddleware, getActiveClients);
router.get('/clients/banned', adminMiddleware, getBannedClients);


module.exports = router