const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
  name: { type: String },
  job: {type: String},
  description: { type: String }
});

module.exports = mongoose.model('Review', Review);



// let reviews = 

// [
//   {
//     "name": "Quý",
//     "job": "Sinh Viên",
//     "description": "Mình đã học Java trên trường nhưng không hiểu, thật sự khó tiếp thu. Mình học online. Mình đã hiểu được kiến thức cơ bản và có thể bắt tay làm project thực tế.",
//     "id": "1"
//   },
//   {
//     "name": "Tiến",
//     "job": "Sinh Viên",
//     "description": "Khóa học vô cùng hay. Khóa học rất chi tiết và dễ hiểu, hướng dẫn thực hành từng bước. Khoá học cung cấp đầy đủ các kiến thức cơ bản Angular. Dựa vào các kiến thức này nó thể tự học thêm các kiến thức nâng cao.",
//     "id": "2"
//   },
//   {
//     "name": "Quân",
//     "job": "Senior",
//     "description": "Khóa học rất chi tiết, bạn nào học xong sẽ có nền tảng rất tốt, hướng dẫn tạo backend chi tiết. Có thể tái sử dụng code nhiều lần. Nhàn hơn cho những lần code sau. Mọi người cần xem lần lượt các video và không đc bỏ sót video nào của thầy.",
//     "id": "3"
//   },
//   {
//     "name": "Cường",
//     "job": "Sinh Viên",
//     "description": "Mình đã học Java trên trường nhưng không hiểu, thật sự khó tiếp thu. Mình học online. Mình đã hiểu được kiến thức cơ bản và có thể bắt tay làm project thực tế.",
//     "id": "4"
//   },
//   {
//     "name": "Quý",
//     "job": "Sinh Viên",
//     "description": "Mình đã học Java trên trường nhưng không hiểu, thật sự khó tiếp thu. Mình học online. Mình đã hiểu được kiến thức cơ bản và có thể bắt tay làm project thực tế.",
//     "id": "5"
//   },
//   {
//     "name": "Tiến",
//     "job": "Sinh Viên",
//     "description": "Khóa học vô cùng hay. Khóa học rất chi tiết và dễ hiểu, hướng dẫn thực hành từng bước. Khoá học cung cấp đầy đủ các kiến thức cơ bản Angular. Dựa vào các kiến thức này nó thể tự học thêm các kiến thức nâng cao.",
//     "id": "6"
//   },
//   {
//     "name": "Quân",
//     "job": "Senior",
//     "description": "Khóa học rất chi tiết, bạn nào học xong sẽ có nền tảng rất tốt, hướng dẫn tạo backend chi tiết. Có thể tái sử dụng code nhiều lần. Nhàn hơn cho những lần code sau. Mọi người cần xem lần lượt các video và không đc bỏ sót video nào của thầy.",
//     "id": "7"
//   },
//   {
//     "name": "Cường",
//     "job": "Sinh Viên",
//     "description": "Mình đã học Java trên trường nhưng không hiểu, thật sự khó tiếp thu. Mình học online. Mình đã hiểu được kiến thức cơ bản và có thể bắt tay làm project thực tế.",
//     "id": "8"
//   }
// ]
// module.exports = reviews;