const {Router} = require('express');
const { login } = require('../controllers/serviceprovider.controller');
const serviceProviderMiddleware = require('../middlewares/serviceprovider.middleware');
const router = Router();

router.post('/login', login);

module.exports = router;