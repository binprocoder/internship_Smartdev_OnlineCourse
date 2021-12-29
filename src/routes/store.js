const express = require('express');
const router = express.Router();

const storeController = require('../app/controllers/storeController');


router.post('/course',storeController.create);
router.get('/course',storeController.course);
router.put('/course/:id', storeController.update);
router.use('/user',storeController.user);
router.use('/review',storeController.review);
router.get('/', (req,res)=> {
    res.send('Hello manage data');
})

module.exports = router;