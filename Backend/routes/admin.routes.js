const {Router} = require('express');
const { addUser, login } = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.post('/login', login);
router.post('/addUser', adminMiddleware, addUser);

module.exports = router