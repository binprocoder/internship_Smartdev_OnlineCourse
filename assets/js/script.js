let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
window.onscroll = () => {
  loginForm.classList.remove('active');
}
formBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

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


// Login authentication
const loginFunction = (e) => {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);
  if (user == null) {
    alert("Vui lòng không để trống người dùng");
  }
  else if (username == data.username && password == data.password) {
    alert("Dang nhap thanh cong");
  }
  else {
    alert("Sai password")
  }
}

// ES6

// Render

var courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const getCourses = async (data)=>{
  await fetch(courseApi)
    .then(res => res.json())
    .then(data);
}
const renderCourse = (courses) =>{
  var listCoursesBlock = document.querySelector('#list-courses');
  var htmls = courses.map(function (course) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
        <div class="course-item mb-3 mt-3" >
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
          </div>
        </div>
      </div>
    `;
  });
  console.log(listCoursesBlock);
  listCoursesBlock.innerHTML = htmls.join('');
}
// Total price
const totalPrice = (courses)=>{
  let total = courses.reduce((total, item) => {
    return total + item.price;
  }, 0);
  alert("Tổng tiền các khóa học hiện tại = " + total);
  return total;
}
// 
const start = ()=>{
  getCourses((courses)=>{
    renderCourse(courses);
    totalPrice(courses);
  })
}
start();

// ES5
// function start() {
//   getCourses(function (courses) {
//     renderCourses(courses);
//   })
// }
// get course

// function getCourses(callback) {
//   fetch(courseApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(callback);
// }



// function renderCourses(courses) {
//   var listCoursesBlock = document.querySelector('#list-courses');
//   var htmls = courses.map(function (course) {
//     return `
//     <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
//       <div class="course-item mb-3 mt-3" >
//                 <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
//                     <div class="img-item">
//                         <img class="img-course" src="${course.anh}"
//                             alt="Khóa học lập trình JavaScript">
//                     </div>
//                 </a>
//                 <div class="detail-item">
//                     <p>Updated ${course.date}</p>
//                     <a href="https://hoclaptrinhonline.asia/course/view.php?id=22">
//                         <h3>${course.name}</h3>
//                     </a>
//                     <p>${course.description}</p>
//                 </div>
//                 <hr />
//                 <div class="footer-item">
//                     <i class="far fa-user"><span>${course.numberLearn}</span></i>
//                     <i class="far fa-comments"><span>${course.comment}</span></i>
//                 </div>
//         </div>
//       </div>
//     `;
//   });
//   listCoursesBlock.innerHTML = htmls.join('');
// }