const axios = require('axios');
const courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
class helloController {
    index(req,res,next){
        res.send('Hello trang hello');
    }
    ren(req,res,next){
        res.render('hello');
    }
    async ejs(req,res,next){
        // res.render('ejstest',{hoten: 'Bin Tran'});
        // Mang~ tham so
        // res.render('ejstest',{nam: [1999,2000,2001,2002,2003]});
        const getCourse = async () =>{
            const res = await axios.get(courseApi);
            return res.data;
        }
        const courses = await getCourse();
        res.render('ejstest',{course: courses});
        // return res.status(200).json(courses);
    }
}
module.exports = new helloController;