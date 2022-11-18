const {Router} = require('express');
const { updateprofilepic, editProfile, addPicture, getPictures, deletePicture, getFollowers, getClient, sendNotification, getNotifications } = require('../controllers/serviceprovider.controller');
const serviceProviderMiddleware = require('../middlewares/serviceprovider.middleware');
const router = Router();

router.put('/profilepic', serviceProviderMiddleware, updateprofilepic);
router.put('/editprofile', serviceProviderMiddleware, editProfile);
router.post('/picture', serviceProviderMiddleware, addPicture);
router.get('/picture', serviceProviderMiddleware, getPictures);
router.delete('/picture/:picture_id', serviceProviderMiddleware, deletePicture);
router.get('/followers', serviceProviderMiddleware, getFollowers);
router.get('/client/:_id', serviceProviderMiddleware, getClient);
router.post('/notify', serviceProviderMiddleware, sendNotification);
router.get('/notifications', serviceProviderMiddleware, getNotifications);



module.exports = router;