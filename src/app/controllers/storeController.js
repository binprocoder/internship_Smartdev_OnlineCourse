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
}
module.exports = new helloController;