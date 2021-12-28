const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true},
  date: { type: String, default: Date.now },
  price: { type: Number, required: true},
  description: { type: String, maxLength: 600},
  numberLearn: { type: Number, default: 100},
  comment: {type: Number,default: 84}, 
  anh: {type: String},
});

module.exports = mongoose.model('Course', Course);


// let courses = 
// [
//   {
//     "name": "Lập trình Web cho người mới bắt đầu",
//     "price": 200000,
//     "date": "12/08/21",
//     "description": "Khóa học web dành cho người mới bắt đầu học lập trình",
//     "numberLearn": 99,
//     "comment": 7,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776496046120/course1.jpg",
//     "id": "1"
//   },
//   {
//     "name": "Khóa học lập trình Web",
//     "price": 150000,
//     "date": "21/08/21",
//     "description": "Khoá học dành cho người mới bắt đầu học lập trình. Thông qua khoá học các...",
//     "numberLearn": 15,
//     "comment": 20,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776701595698/course2.png",
//     "id": "2"
//   },
//   {
//     "name": "Khóa học lập trình JavaScript",
//     "price": 130000,
//     "date": "22/08/21",
//     "description": "Lập trình javascript căn bản cho người mới bắt đầu làm quen với ngôn ngữ...",
//     "numberLearn": 75,
//     "comment": 2,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776982605884/course3.png",
//     "id": "3"
//   },
//   {
//     "name": "Khóa học Java cơ bản đến nâng cao",
//     "price": 170000,
//     "date": "03/09/21",
//     "description": "Khóa học lập trình java căn bản ",
//     "numberLearn": 11,
//     "comment": 52,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899777230045204/course4.png",
//     "id": "4"
//   },
//   {
//     "name": "Khóa học cơ sở dữ liệu với Mysql",
//     "price": 200000,
//     "date": "06/10/21",
//     "description": "Khóa học cơ sở dữ liệu Mysql ",
//     "numberLearn": 11,
//     "comment": 9,
//     "anh": "https://hoclaptrinhonline.asia/pluginfile.php/2148/course/overviewfiles/MY-SQL-min.png",
//     "id": "5"
//   },
//   {
//     "name": "Lập trình Web cho người mới bắt đầu",
//     "price": 200000,
//     "date": "12/08/21",
//     "description": "Khóa học web dành cho người mới bắt đầu học lập trình",
//     "numberLearn": 99,
//     "comment": 7,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776496046120/course1.jpg",
//     "id": "6"
//   },
//   {
//     "name": "Khóa học lập trình Web",
//     "price": 150000,
//     "date": "21/08/21",
//     "description": "Khoá học dành cho người mới bắt đầu học lập trình. Thông qua khoá học các...",
//     "numberLearn": 15,
//     "comment": 20,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776701595698/course2.png",
//     "id": "7"
//   },
//   {
//     "name": "Khóa học lập trình JavaScript",
//     "price": 130000,
//     "date": "22/08/21",
//     "description": "Lập trình javascript căn bản cho người mới bắt đầu làm quen với ngôn ngữ...",
//     "numberLearn": 75,
//     "comment": 2,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776982605884/course3.png",
//     "id": "8"
//   },
//   {
//     "name": "Khóa học lập trình JavaScript",
//     "price": 130000,
//     "date": "22/08/21",
//     "description": "Lập trình javascript căn bản cho người mới bắt đầu làm quen với ngôn ngữ...",
//     "numberLearn": 75,
//     "comment": 2,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776982605884/course3.png",
//     "id": "9"
//   },
//   {
//     "name": "Khóa học lập trình JavaScript",
//     "price": 130000,
//     "date": "22/08/21",
//     "description": "Lập trình javascript căn bản cho người mới bắt đầu làm quen với ngôn ngữ...",
//     "numberLearn": 75,
//     "comment": 2,
//     "anh": "https://media.discordapp.net/attachments/687919257098649601/919899776982605884/course3.png",
//     "id": "10"
//   }
// ]
// module.exports = courses;