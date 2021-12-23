const express = require('express');
const router = express.Router();

const signupController = require('../app/controllers/signupController');

router.post('/',signupController.register);
router.use('/',signupController.index);
module.exports = router;