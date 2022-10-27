const {Router} = require('express');
const { addUser, getServiceProviders, getBannedServiceProviders, toggleActiveSellers, getUsersCount, getActiveClients, getBannedClients, toggleActiveClient } = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.post('/addUser', adminMiddleware, addUser);
router.get('/services', adminMiddleware, getServiceProviders);
router.get('/services/banned', adminMiddleware, getBannedServiceProviders);
router.put('/banService/:id', adminMiddleware, toggleActiveSellers);
router.get('/count', adminMiddleware, getUsersCount);
router.get('/clients', adminMiddleware, getActiveClients);
router.get('/clients/banned', adminMiddleware, getBannedClients);
router.put('/banClient/:id', adminMiddleware, toggleActiveClient);


module.exports = router