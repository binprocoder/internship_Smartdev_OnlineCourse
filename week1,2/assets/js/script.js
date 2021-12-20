var listCoursesBlock = document.querySelector('#list-courses');
let pagination = document.getElementById("pagination");
let listReviewsBlock = document.getElementById("review-list");
const courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const reviewApi = 'https://61a0652fa647020017613372.mockapi.io/api/reviews';

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

// // Pagination
// let currentPage = 1;
// let perPage = 4;
// const handlePage = (key)=> {
//   currentPage = key;
//   alert(key);
// } 
// const handlePagination = (courses) => {
//   let totalPage = Math.ceil(courses.length / perPage);
//   let perPost = [];
//   for (let i = 1; i <= totalPage; i++) {
//     document.getElementById('pagination').innerHTML += `<button onclick = handlePage(${i} +',' + ${courses})>${i}</button>`
//   }
// }

// Pagination js
const handlePagination = (data) => {
  $('#pagination').pagination({
    dataSource: data,
    pageSize: 4,
    callback: function (data, pagination) {
      // template method of yourself
      var newCourses = data.map(function (course) {
        price = new Intl.NumberFormat().format(course.price)
        console.log(price);
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
                    <p>Giá tiền: <span>${price}VND</span></p>
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
const getCourses = async (data) => {
  await fetch(courseApi)
    .then(res => res.json())
    .then(data);
}
// Render course data
const renderCourse = (courses) => {
  var htmls = courses.map(function (course) {
    price = new Intl.NumberFormat().format(course.price)
    console.log(price);
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
              <p>Giá tiền: <span>${price}VND</span></p>
          </div>
        </div>
      </div>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join('');
}

const getReviews = async (data) => {
  await fetch(reviewApi)
    .then(res => res.json())
    .then(data);
}
// Render review data
const renderReviews = (reviews) => {
  var htmls = reviews.map(function (review) {
     return `
    <div class="swiper-slide">
      <div class="box">
        <div class="header__review">
            <!-- Left -->
            <div class="header__review-left">
                <!-- Left -->
                <img src="./assets/images/review.png" alt="">
                <!-- Right -->
                <div class="header__review-right">
                    <h3>${review.name}</h3>
                    <h4>${review.job}</h4>
                </div>
            </div>
            <div class="header__review-right">
                <i class="fas fa-quote-left"></i>
            </div>
        </div>
        <p>${review.description}</p>
      </div>
    </div>
    `;
  });
  listReviewsBlock.innerHTML = htmls.join('');
}
// Total price
const totalPrice = (courses) => {
  let total = courses.reduce((total, item) => {
    return total + item.price;
  }, 0);
  giakhuyenmai = total - (total * 20 / 100);
  totalP = new Intl.NumberFormat().format(total);
  giakhuyenmaiPrice = new Intl.NumberFormat().format(giakhuyenmai);

  alert('Khuyến mãi hôm nay tổng tiền toàn bộ khóa học: ' + totalP + ' VND sẽ được giảm giá 20% chỉ còn lại: ' + giakhuyenmaiPrice + ' VND');
  return total;
}

// Những function sẽ chạy khi trang web chạy
const start = () => {
  getCourses((courses) => {
    renderCourse(courses);
    let courseItem = document.getElementsByClassName("course-item");
    console.log(courseItem.length);
    totalPrice(courses);
    handlePagination(courses);
  });
  getReviews((reviews) => {
    renderReviews(reviews);
  })
}
start();

