class siteController {
    index(req,res,next) {
        // res.send('Trang chu');
        res.render('index.ejs')
    }
    test(req,res,next){
        res.send(req.params);
    }
} 
module.exports = new siteController;