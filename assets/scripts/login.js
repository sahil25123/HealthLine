const loginForm = document.querySelector('.loginForm');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const submitButton = document.getElementById('submit-button');
  const errorMessageElement = document.getElementById('error-message');
  const googleSignInButton = document.getElementById('google-signin-button');

  // Login Form submission logic
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailField.value;
    const password = passwordField.value;

    submitButton.textContent = 'Signing In...';
    submitButton.disabled = true;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      window.location.href = 'PatientDashboard.html';
    } catch (error) {
      errorMessageElement.textContent = error.message;
      submitButton.disabled = false;
    } finally {
      submitButton.textContent = 'Sign In';
    }
  });

  // Google Sign-In logic
  googleSignInButton.addEventListener('click', async (e) => {
    e.preventDefault();

    googleSignInButton.textContent = 'Signing In...';
    googleSignInButton.disabled = true;

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      window.location.href = 'PatientDashboard.html';
    } catch (error) {
      errorMessageElement.textContent = error.message;
      googleSignInButton.disabled = false;
    } finally {
      googleSignInButton.textContent = 'Continue with Google';
    }
  });