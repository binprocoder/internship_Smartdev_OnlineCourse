const express = require('express');
const router = express.Router();
const authorization = require('../app/middlewares/auth');
const siteController = require('../app/controllers/siteController');
router.get('/login', (req,res) => {
    res.render('login')
}) 
router.post('/login',siteController.login);
router.use('/', authorization.authen,siteController.index);

module.exports = router;