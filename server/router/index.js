const express = require('express');

const router = express.Router();
const operations = require('./operations.js');

router.use('/', operations);

module.exports = router;