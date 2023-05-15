const loginBtn = document.querySelector('#login-btn');
const signUpBtn = document.querySelector('#signup-btn');

function redirectToLogin() {
    document.location.replace('/login');
}

function redirectToSignUp() {
    document.location.replace('/signup');
}

if (loginBtn) {loginBtn.addEventListener('click', redirectToLogin);}
if (signUpBtn) {signUpBtn.addEventListener('click', redirectToSignUp);}