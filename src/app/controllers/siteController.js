require("dotenv").config();
const { redirect } = require("express/lib/response");
const jwt = require('jsonwebtoken');
const Course = require('../models/Course')
const Review = require('../models/Review')
const User = require('../models/User')

class siteController {
    async index(req, res, next) {
        let courses = await Course.find({});
        Review.find({})
        .then((reviews) => res.render('index',{courses, reviews}))
        .catch(next);
    }
    async login(req, res, next){
        await User.findOne({
            username: req.body.username , password: req.body.password
        })
        .then(data=> {
            console.log(data);
            if(data.id !== undefined) {
                var user = {
                    id: data.id,
                    username: data.username
                };
                var token = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {algorithm: 'HS256', expiresIn: '3h'});
                // res.render('index',{token})
                // res.json(token);
                res.cookie('access-token', `Bearer ${token}`,{ 
                    maxAge: 10800000
                })
                res.redirect('/')
            }
            else{
                res.json('Err');
            }
        })
        .catch(err => {
            res.json({err: err.message});
        })

    }
}
module.exports = new siteController;