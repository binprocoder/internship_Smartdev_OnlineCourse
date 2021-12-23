const axios = require('axios');
// const courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const Course = require('../models/Course')
const Review = require('../models/Review')
const User = require('../models/User')

class siteController {
    async index(req, res, next) {
        // res.send('Trang chu');
        // const getCourse = async () =>{
        //     const res = await axios.get(courseApi);
        //     return res.data;
        // }
        // const courses = await getCourse();
        // const courses = Course
        res.render('index', { courses: Course, reviews: Review });
    }
}
module.exports = new siteController;