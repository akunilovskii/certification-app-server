const { Router } = require('express');
const createTest = require('./createTest');
const userGetAll = require('./userGetAll');
const userGetByID = require('./userGetByID');
const userUpdateByID = require('./userUpdateByID');
const userDeleteByID = require('./userDeleteByID');
const userDeleteAll = require('./userDeleteAll');
const router = Router();

router.post('/create', createTest); // POST localhost:5000/tests/create

// router.get('/', userGetAll); // GET localhost:5000/user
// router.get('/:userId', userGetByID); // GET localhost:5000/user/userId as param
// router.get('/:userId/:age', userGetByID); // GET localhost:5000/user/userId as param/age as param
// router.patch('/:userId', userUpdateByID); // GET localhost:5000/user/userId as param
// router.delete('/:userId', userDeleteByID); // GET localhost:5000/user/userId as param
// router.delete('/', userDeleteAll); // GET localhost:5000/user/userId as param

module.exports = router;
