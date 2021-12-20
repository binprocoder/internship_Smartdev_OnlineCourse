class signupController {
    // Get
    index(req,res,next) {
        // res.send('Trang chu');
        res.render('signup.ejs')
        
    }
    // Post
    signup(req,res,next){
        res.json(req.body);
    }
}
module.exports = new signupController;