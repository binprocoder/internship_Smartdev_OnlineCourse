require("dotenv").config();
const jwt = require('jsonwebtoken')

module.exports = {
    authen: (req,res,next) =>{
        const auth = req.headers.cookie
        if(auth){
            var token = auth.split('%20')[1];
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
                if(err){
                    return res.status(400).send({ 
                        message: 'Token loi'
                    })
                }
                else{
                    // res.json({ data: user.user})
                    next();
                }
            })
        }
        else {
            return res.status(400).send({ 
                message: 'Bạn chưa được xác thực, cần phải đăng nhập'
            })
        }
    }
}