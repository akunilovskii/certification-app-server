const { Router } = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetByID = require('./userGetByID');
const userUpdateByID = require('./userUpdateByID');
const userDeleteByID = require('./userDeleteByID');
const userDeleteAll = require('./userDeleteAll');
const router = Router();

const userController = require('./controllers/userController');
const authMiddleware = require('./middlewares/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/profile', userController.profile);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

// router.post('/', userRegister); // POST localhost:5000/user
// router.get('/', userGetAll); // GET localhost:5000/user
// router.get('/:userId', userGetByID); // GET localhost:5000/user/userId as param
// // router.get('/:userId/:age', userGetByID); // GET localhost:5000/user/userId as param/age as param
// router.patch('/:userId', userUpdateByID); // GET localhost:5000/user/userId as param
// router.delete('/:userId', userDeleteByID); // GET localhost:5000/user/userId as param
// router.delete('/', userDeleteAll); // GET localhost:5000/user/userId as param

module.exports = router;
