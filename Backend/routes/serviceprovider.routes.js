const {Router} = require('express');
const { login, updateprofilepic, editProfile } = require('../controllers/serviceprovider.controller');
const serviceProviderMiddleware = require('../middlewares/serviceprovider.middleware');
const router = Router();

router.post('/login', login);
router.put('/profilepic', serviceProviderMiddleware, updateprofilepic);
router.put('/editprofile', serviceProviderMiddleware, editProfile);



module.exports = router;