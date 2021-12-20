const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');
router.get('/api/:year/:month', siteController.test);
router.use('/', siteController.index);

module.exports = router;