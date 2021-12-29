const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/adminController');
router.get('/stored/courses',adminController.store);
router.get('/course/create',adminController.create);
router.get('/course/:id/edit',adminController.edit);
router.use('/course',adminController.course);
router.use('/review',adminController.review);
router.use('/user',adminController.user);
router.use('/',adminController.index);

// Admin create la them khoa hoc /admin/create.js
// admin/stored/course la cac khoa hoc hien tai sua xoa
// admin/course/stored la` pót luu thong tin
module.exports = router;