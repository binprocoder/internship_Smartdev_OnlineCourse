class helloController {
    index(req,res,next){
        res.send('Hello trang hello');
    }
    ren(req,res,next){
        res.render('hello');
    }
    ejs(req,res,next){
        // res.render('ejstest',{hoten: 'Bin Tran'});
        // Mang~ tham so
        res.render('ejstest',{nam: [1999,2000,2001,2002,2003]});
    }
}
module.exports = new helloController;