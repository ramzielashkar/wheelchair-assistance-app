const {Router} = require('express');
const { login, updateprofilepic, editProfile, addPicture } = require('../controllers/serviceprovider.controller');
const serviceProviderMiddleware = require('../middlewares/serviceprovider.middleware');
const router = Router();

router.post('/login', login);
router.put('/profilepic', serviceProviderMiddleware, updateprofilepic);
router.put('/editprofile', serviceProviderMiddleware, editProfile);
router.post('/picture', serviceProviderMiddleware, addPicture);



module.exports = router;