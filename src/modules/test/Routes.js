const { Router } = require('express');
const createTest = require('./controllers/create');
const updateByID = require('./controllers/updateByID');
const getAll = require('./controllers/getAll');
const getByID = require('./controllers/getByID');
const deleteByID = require('./controllers/deleteById');
// const userDeleteByID = require('./userDeleteByID');
// const userDeleteAll = require('./userDeleteAll');
const authMiddleware = require('../user/middlewares/authMiddleware');
const router = Router();

router.post('/create', authMiddleware, createTest);
router.put('/:testId', authMiddleware, updateByID);
router.get('/', authMiddleware, getAll);
router.get('/:testId', authMiddleware, getByID);
router.delete('/:testId', authMiddleware, deleteByID);
// router.get('/:userId/:age', userGetByID); // GET localhost:5000/user/userId as param/age as param
// router.delete('/:userId', userDeleteByID); // GET localhost:5000/user/userId as param
// router.delete('/', userDeleteAll); // GET localhost:5000/user/userId as param

module.exports = router;
