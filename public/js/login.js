const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  let loginForm = document.querySelector('.login-form');
  if (loginForm) {loginForm.addEventListener('submit', loginFormHandler);}