const {Router} = require('express');
const { register } = require('../controllers/client.controller');
const router = Router();

router.post('/signup', register);


module.exports = router