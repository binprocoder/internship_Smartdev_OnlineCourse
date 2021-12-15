var form = document.getElementById("form-login");
var loginArea = document.getElementById("login-area");
var logoutArea = document.getElementById("logout-area");
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
// Get data user from JSON 
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
    handleLogin(users);
  });
}
form.addEventListener('submit', handleForm);

// renderLogin
const renderLogin = () => {
  const userCurrent = JSON.parse(localStorage.getItem('userCurrent'));

  const logout = {
    email: null,
    password: null
  }
  if (userCurrent.email == null && userCurrent.password == null) {
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
const handleLogin = (users) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  let isUser = false;
  for (let i = 0; i < users.length; i++) {
    if (email == users[i].username && password == users[i].password) {
      isUser = true;
      break;
    }
    else
      isUser = false;
  }
  console.log(isUser);
  if (isUser) {
    var user = {
      email,
      password,
    }
    localStorage.setItem('userCurrent', JSON.stringify(user));
    renderLogin();
    alert('Login successful');
  }
  else
    alert('Wrong password or email');

}
renderLogin();