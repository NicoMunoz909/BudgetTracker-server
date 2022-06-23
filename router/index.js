const express = require('express');

const router = express.Router();
const operations = require('./operations.js');
const categories = require('./categories.js');

router.use('/', operations);
router.use('/categories', categories)

module.exports = router;