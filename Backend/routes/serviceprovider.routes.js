const {Router} = require('express');
const { login, updateprofilepic, editProfile, addPicture, getPictures } = require('../controllers/serviceprovider.controller');
const serviceProviderMiddleware = require('../middlewares/serviceprovider.middleware');
const router = Router();

router.post('/login', login);
router.put('/profilepic', serviceProviderMiddleware, updateprofilepic);
router.put('/editprofile', serviceProviderMiddleware, editProfile);
router.post('/picture', serviceProviderMiddleware, addPicture);
router.get('/picture', serviceProviderMiddleware, getPictures);



module.exports = router;