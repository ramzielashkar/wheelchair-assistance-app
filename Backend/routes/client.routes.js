const {Router} = require('express');
const { register, updateprofilepic } = require('../controllers/client.controller');
const clientMiddleware = require('../middlewares/client.middleware');
const router = Router();

router.post('/signup', register);
router.post('/profilepic', clientMiddleware, updateprofilepic);

module.exports = router