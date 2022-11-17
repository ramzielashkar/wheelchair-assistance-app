const {Router} = require('express');
const { register, updateprofilepic, editProfile, getServiceProviders, getServiceProvider, follow, unFollow, getFollowed, search, login, getNotifications } = require('../controllers/client.controller');
const clientMiddleware = require('../middlewares/client.middleware');
const router = Router();

router.post('/signup', register);
router.post('/login', login);
router.put('/profilepic', clientMiddleware, updateprofilepic);
router.put('/editprofile', clientMiddleware, editProfile);
router.get('/services/:type/:lat/:lng', clientMiddleware, getServiceProviders);
router.get('/service/:_id', clientMiddleware, getServiceProvider);
router.put('/follow/:seller_id', clientMiddleware, follow);
router.delete('/unfollow/:follow_id', clientMiddleware, unFollow);
router.get('/followed', clientMiddleware, getFollowed);
router.get('/search/:service', clientMiddleware, search);
router.get('/notifications', clientMiddleware, getNotifications );





module.exports = router