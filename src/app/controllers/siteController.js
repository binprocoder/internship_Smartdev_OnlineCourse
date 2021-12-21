const axios = require('axios');
const courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
class siteController {
    async index(req,res,next) {
        // res.send('Trang chu');
        const getCourse = async () =>{
            const res = await axios.get(courseApi);
            return res.data;
        }
        const courses = await getCourse();
        res.render('index',{courses: courses});
    }
    test(req,res,next){
        res.send(req.params);
    }
} 
module.exports = new siteController;