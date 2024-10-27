// login.js
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getUserRole } from './userRole'; // Make sure to import your role fetching logic if it's in another file

const loginForm = document.querySelector('.loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const roleField = document.getElementById('role'); 
const submitButton = document.getElementById('submit-button');
const errorMessageElement = document.getElementById('error-message');
const googleSignInButton = document.getElementById('google-signin-button');

// Initialize Firebase Auth
const auth = getAuth(); 

// Login Form submission logic
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  const role = roleField.value;

  submitButton.textContent = 'Signing In...';
  submitButton.disabled = true;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // Redirect based on role
    if (role === 'patient') {
      window.location.href = 'PatientDashboard.html';
    } else if (role === 'doctor') { // Use 'doctor' instead of 'therapist'
      window.location.href = 'TherapistDashboard.html'; 
    } else if (role === 'admin') {
      window.location.href = 'AdminDashboard.html'; 
    } else {
      errorMessageElement.textContent = 'Invalid role selected.';
      return;
    }
  } catch (error) {
    errorMessageElement.textContent = error.message;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Sign In';
  }
});

// Google Sign-In logic
googleSignInButton.addEventListener('click', async (e) => {
  e.preventDefault();
  googleSignInButton.textContent = 'Signing In...';
  googleSignInButton.disabled = true;

  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    const user = auth.currentUser; // Get the current user
    const role = await getUserRole(user); 

    if (role === 'patient') {
      window.location.href = 'PatientDashboard.html';
    } else if (role === 'doctor') { // Use 'doctor' instead of 'therapist'
      window.location.href = 'TherapistDashboard.html'; 
    } else if (role === 'admin') {
      window.location.href = 'AdminDashboard.html'; 
    }
  } catch (error) {
    errorMessageElement.textContent = error.message;
  } finally {
    googleSignInButton.textContent = 'Continue with Google';
    googleSignInButton.disabled = false;
  }
});

// Function to get user role (implement your own logic)
async function getUserRole(user) {
  // Here you can implement logic to fetch the role from your database
}
