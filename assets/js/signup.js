let email = document.getElementById('exampleInputEmail1');
let password = document.getElementById('exampleInputPassword1');
let formSignUp = document.getElementById('signupForm');
let btnSignup = document.getElementsByClassName('btn-signUp');
let loginSub = document.getElementById('login-btn--sub');
console.log(loginSub);
loginSub.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('active');
  });
  
// let loginForm = document.querySelector('.login-form-container');
console.log(formBtn);
formSignUp.addEventListener('submit', async (e)=>{
    // Stop reload page before after, if you dont preventDefault it will lost email.value and password.value
    e.preventDefault();
    await fetch('https://61a0652fa647020017613372.mockapi.io/api/users/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email.value,
                password: password.value
            })
        })
        .then(res => {
          return res.json(); // JSON data parsed by `data.json()` call
        })
        .then(data => console.log(data))
        .catch(err => alert("có lỗi trong quá trình đăng ký"))
    // Reload page after post successful
    location.reload();
    alert("Chúc mừng bạn đã đăng ký thành công");
 
});
   