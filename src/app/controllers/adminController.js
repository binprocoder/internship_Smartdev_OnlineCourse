const axios = require('axios');
const Course = require('../models/Course')
const User = require('../models/User')
const Review = require('../models/Review')
class adminController {
    index(req, res, next) {
        res.render('login');
    }

    // Get /admin/course
    course(req, res, next) {
        res.send('Trang chi tiet tat ca cac course');
    }
    // Get /admin/course/create
    create(req, res, next) {
        res.render('create');
    }
    // [Get] /admin/stored/courses
    store(req, res, next) {
        Promise.all([Course.find({})])
            .then(([courses]) =>
                res.render('stored-course', {
                    courses
                }))
    }
    // Get /admin/user
    user(req, res, next) {
        res.send('Trang chi tiet tat ca cac user');
    }
    // Get /admin/review
    review(req, res, next) {
        res.send('Trang chi tiet tat ca cac review');
    }
    // [Post] /admin/course/store
    storeCourse(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/admin/stored/courses'))
            .catch(error => {
                res.json(error);;
            })
    }
    // [Get] /admin/course/:id/edit
    edit(req,res,next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {course}))
            .catch(next);
    }

    

}
module.exports = new adminController;