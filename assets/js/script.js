let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
var listCoursesBlock = document.querySelector('#list-courses');
var form = document.getElementById("form-login");
var loginArea = document.getElementById("login-area");
var logoutArea = document.getElementById("logout-area");
let pagination = document.getElementById("pagination");

// Pagination
var limitItem = 4;
const buttonGenerator = (limitItem, courses) => {
  const nofTr = courses.length;
  if (nofTr <= limitItem) {

  }
}
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

var userApi = 'https://61a0652fa647020017613372.mockapi.io/api/users';
const getUsers = async (data) => {
  await fetch(userApi)
    .then(res => res.json())
    .then(data);
}

// Get element from input
const handleForm = (e) => {
  e.preventDefault();
  getUsers((users) => {
    login(users);
  });
}
form.addEventListener('submit', handleForm);

// renderLogin
const renderLogin = () => {
  const userCurrent = JSON.parse(localStorage.getItem('userCurrent'));

  const logout = {
    username: null,
    password: null
  }
  if (userCurrent.username == null && userCurrent.password == null) {
    logoutArea.style.display = 'none';
    loginArea.style.display = 'initial';
  }
  else {
    loginForm.classList.remove('active');
    loginArea.style.display = "none";
    logoutArea.style.display = "initial";
  }
  logoutArea.onclick = () => {
    localStorage.setItem('userCurrent', JSON.stringify(logout));
  };
}
// Login authentication

const login = (users) => {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  let flag = false;
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      flag = true;
      break;
    }
    else
      flag = false;
  }
  console.log(flag);
  if (password.length <= 6) {
    alert("Password must be longer than 6 characters");
  }
  else {
    if (flag) {
      var user = {
        username,
        password,
      }
      localStorage.setItem('userCurrent', JSON.stringify(user));
      renderLogin();
      alert('Login successful');
    }
    else
      alert('Wrong password');
  }

  // }
}

// ES6

// Render

var courseApi = 'https://61a0652fa647020017613372.mockapi.io/api/courses';
const getCourses = async (data) => {
  await fetch(courseApi)
    .then(res => res.json())
    .then(data);
}
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
// 
const start = () => {
  getCourses((courses) => {
    renderCourse(courses);
    let courseItem = document.getElementsByClassName("course-item");
    console.log(courseItem.length);
    totalPrice(courses);
  });
  renderLogin();
}
start();

