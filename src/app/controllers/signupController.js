const User = require('../models/User')

class signupController {
    // Get
    index(req,res,next) {
        // res.send('Trang chu');
        res.render('signup.ejs')
        
    }
    // Post
    register(req,res,next){
        // res.json(req.body);
        User.push({
            username: req.body.username,
            password: req.body.password
        })
        res.redirect('/');
    }
}
module.exports = new signupController;