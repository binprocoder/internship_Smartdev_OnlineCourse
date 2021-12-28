const mongoose = require('mongoose');

const connect = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/internship_OnlineCourse');
        console.log('Connect successful');
    }
    catch (err){
        console.log('Connect failed');
    }
}

module.exports = {connect};