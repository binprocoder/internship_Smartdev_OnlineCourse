const Course = require('../models/Course')
const User = require('../models/User')
const Review = require('../models/Review')
class helloController {
    course(req,res,next){
        Course.find({})
            .then((courses) => res.json(courses))
    }
    user(req,res,next){
        User.find({})
            .then((users) => res.json(users))
    }
    review(req,res,next){
        Review.find({})
            .then((reviews) => res.json(reviews))
    }
    // [Post] /admin/course/store
    create(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/admin/stored/courses'))
            .catch(error => {
                res.json(error);;
            })
    }
    // {Put} /admin/course/:id
    update(req,res,next) {
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/admin/stored/courses')
            })
            .catch(next);
    }
}
module.exports = new helloController;