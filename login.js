// Switch between login & signup
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleLink = document.getElementById('toggleLink');
const formTitle = document.getElementById('form-title');
const toggleText = document.getElementById('toggleText');

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  const isLogin = loginForm.style.display !== 'none';

  loginForm.style.display = isLogin ? 'none' : 'block';
  signupForm.style.display = isLogin ? 'block' : 'none';
  formTitle.innerText = isLogin ? 'Create a MoneyMentor Account' : 'Login to MoneyMentor';
  toggleText.innerHTML = isLogin
    ? 'Already have an account? <a href="#" id="toggleLink">Login</a>'
    : 'Don\'t have an account? <a href="#" id="toggleLink">Create Account</a>';
  // Re-bind toggle
  document.getElementById('toggleLink').addEventListener('click', toggleLink.onclick);
});

// Login
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const stored = JSON.parse(localStorage.getItem(`user-${email}`));
  if (stored && stored.password === password) {
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = 'index.html';
  } else {
    alert('Invalid login credentials.');
  }
});

// Signup
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (localStorage.getItem(`user-${email}`)) {
    alert('User already exists!');
  } else {
    localStorage.setItem(`user-${email}`, JSON.stringify({ email, password }));
    alert('Account created! You can now log in.');
    // Switch to login form
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    formTitle.innerText = 'Login to MoneyMentor';
    toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Create Account</a>';
    document.getElementById('toggleLink').addEventListener('click', toggleLink.onclick);
  }
});
