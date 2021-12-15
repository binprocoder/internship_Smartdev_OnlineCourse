var listCoursesBlock = document.querySelector('#list-courses');
let pagination = document.getElementById("pagination");


// let currentPage = 1;
// let perPage = 4;
// const handlePage = (key)=> {
//   currentPage = key;
//   alert(key);
// } 

// // Pagination
// const handlePagination = (courses) => {

//   let totalPage = Math.ceil(courses.length / perPage);
//   let perPost = [];

//   for (let i = 1; i <= totalPage; i++) {
//     document.getElementById('pagination').innerHTML += `<button onclick = handlePage(${i} +',' + ${courses})>${i}</button>`
//   }
// }

// Swiper review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// Pagination js
const handlePagination = (data) =>{
  $('#pagination').pagination({
    dataSource: data,
    pageSize: 4,
    callback: function(data, pagination) {
        // template method of yourself
        var newCourses = data.map(function (course) {
          return `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12"  >
              <div class="course-item mb-3 mt-3" ">
                <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
                    <div class="img-item">
                        <img class="img-course" src="${course.anh}"
                            alt="Khóa học lập trình JavaScript">
                    </div>
                </a>
                <div class="detail-item">
                    <p>Updated ${course.date}</p>
                    <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
                        <h3>${course.name}</h3>
                    </a>
                    <p>${course.description}</p>
                </div>
                <hr />
                <div class="footer-item">
                    <i class="far fa-user"><span>${course.numberLearn}</span></i>
                    <i class="far fa-comments"><span>${course.comment}</span></i>
                    <p>Giá tiền: <span>${course.price}</span></p>
                </div>
              </div>
            </div>
          `;
        });
        const html = newCourses.join('');
        document.getElementById('list-courses').innerHTML = html;
    }
  })
}
// Get course data from JSON
var courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const getCourses = async (data) => {
  await fetch(courseApi)
    .then(res => res.json())
    .then(data);
}
// Render course data
const renderCourse = (courses) => {
  var htmls = courses.map(function (course) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12"  >
        <div class="course-item mb-3 mt-3" ">
          <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
              <div class="img-item">
                  <img class="img-course" src="${course.anh}"
                      alt="Khóa học lập trình JavaScript">
              </div>
          </a>
          <div class="detail-item">
              <p>Updated ${course.date}</p>
              <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
                  <h3>${course.name}</h3>
              </a>
              <p>${course.description}</p>
          </div>
          <hr />
          <div class="footer-item">
              <i class="far fa-user"><span>${course.numberLearn}</span></i>
              <i class="far fa-comments"><span>${course.comment}</span></i>
              <p>Giá tiền: <span>${course.price}</span></p>
          </div>
        </div>
      </div>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join('');
}
// Total price
const totalPrice = (courses) => {
  let total = courses.reduce((total, item) => {
    return total + item.price;
  }, 0);
  giakhuyenmai = total - (total * 20 / 100);
  alert('Khuyến mãi hôm nay tổng tiền toàn bộ khóa học: ' + total + 'VND sẽ được giảm giá 20% chỉ còn lại: ' + giakhuyenmai + 'VND');
  return total;
}
// Khi bật trang web lên
const start = () => {
  getCourses((courses) => {
    renderCourse(courses);
    let courseItem = document.getElementsByClassName("course-item");
    console.log(courseItem.length);
    totalPrice(courses);
    handlePagination(courses);
  });

}
start();

