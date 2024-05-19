const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Mendapatkan tombol-tombol "ghost"
const ghostSignInButton = document.querySelector('.ghost-signin');
const ghostSignUpButton = document.querySelector('.ghost-signup');

ghostSignInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

ghostSignUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});
