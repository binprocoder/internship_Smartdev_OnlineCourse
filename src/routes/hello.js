const express = require('express');
const router = express.Router();

const helloController = require('../app/controllers/helloController');

router.use('/render',helloController.ren);
router.get('/ejs',helloController.ejs);
router.use('/',helloController.index);

module.exports = router;