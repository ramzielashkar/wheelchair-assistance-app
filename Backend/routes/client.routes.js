const {Router} = require('express');
const { register, updateprofilepic, editProfile, getServiceProviders, getServiceProvider } = require('../controllers/client.controller');
const clientMiddleware = require('../middlewares/client.middleware');
const router = Router();

router.post('/signup', register);
router.put('/profilepic', clientMiddleware, updateprofilepic);
router.put('/editprofile', clientMiddleware, editProfile);
router.get('/services/:type', clientMiddleware, getServiceProviders);
router.get('/service/:_id', clientMiddleware, getServiceProvider);


module.exports = router