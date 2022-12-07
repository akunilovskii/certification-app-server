const { Router } = require('express');
const createTest = require('./controllers/create');
const updateByID = require('./controllers/updateByID');
const userGetAll = require('./userGetAll');
const userGetByID = require('./userGetByID');
const userDeleteByID = require('./userDeleteByID');
const userDeleteAll = require('./userDeleteAll');
const router = Router();

router.post('/create', createTest); // POST localhost:5000/tests/create
router.put('/:testId', updateByID); // GET localhost:5000/user/userId as param

// router.get('/', userGetAll); // GET localhost:5000/user
// router.get('/:userId', userGetByID); // GET localhost:5000/user/userId as param
// router.get('/:userId/:age', userGetByID); // GET localhost:5000/user/userId as param/age as param
// router.delete('/:userId', userDeleteByID); // GET localhost:5000/user/userId as param
// router.delete('/', userDeleteAll); // GET localhost:5000/user/userId as param

module.exports = router;
