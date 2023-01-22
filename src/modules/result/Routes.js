const { Router } = require('express');
const create = require('./controllers/create');
const updateByID = require('./controllers/updateByID');
const getAll = require('./controllers/getAll');
const getByID = require('./controllers/getByID');
const deleteByID = require('./controllers/deleteById');
const authMiddleware = require('../user/middlewares/authMiddleware');
const router = Router();

router.post('/create', authMiddleware, create);
router.put('/:resultId', authMiddleware, updateByID);
router.get('/', authMiddleware, getAll);
router.get('/:resultId', authMiddleware, getByID);
router.delete('/:resultId', authMiddleware, deleteByID);

module.exports = router;
