const express = require('express');
const router = express.Router();

const storeController = require('../app/controllers/storeController');

router.use('/course',storeController.course);
router.use('/user',storeController.user);
router.use('/review',storeController.review);
router.use('/',storeController.index);

module.exports = router;