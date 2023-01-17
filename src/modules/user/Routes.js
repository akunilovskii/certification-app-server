const { Router } = require('express');
const router = Router();

const userController = require('./controllers/userController');
const authMiddleware = require('./middlewares/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/profile', userController.profile);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
