const axios = require('axios');
const courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const Course = require('../models/Course')
const User = require('../models/User')
const Review = require('../models/Review')
class helloController {
    index(req,res,next){
        return res.status(200).json({Course, User, Review})
    }
    course(req,res,next){
        return res.status(200).json({Course})
    }
    user(req,res,next){
        return res.status(200).json({User})
    }
    review(req,res,next){
        return res.status(200).json({Review})
    }
}
module.exports = new helloController;