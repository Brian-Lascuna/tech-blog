const loginBtn = document.querySelector('#login-btn');
const signUpBtn = document.querySelector('#signup-btn');
const postBtn = document.querySelector('#post-btn');

function redirectToLogin() {
    document.location.replace('/login');
}

function redirectToSignUp() {
    document.location.replace('/signup');
}

function redirectToPostPage() {
    document.location.replace('/blog-post')
}

if (loginBtn) {loginBtn.addEventListener('click', redirectToLogin);}
if (signUpBtn) {signUpBtn.addEventListener('click', redirectToSignUp);}
if (postBtn) {postBtn.addEventListener('click', redirectToPostPage)};