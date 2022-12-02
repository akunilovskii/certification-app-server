const { Router } = require('express');
const info = require('./info');
const router = Router();

router.post('/', info);

module.exports = router;
