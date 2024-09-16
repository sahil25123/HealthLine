document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submitButton');

  errorMessage.textContent = '';
  submitButton.textContent = 'Signing Up...';
  submitButton.disabled = true;

  // Basic form validation
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    submitButton.textContent = 'Sign Up';
    submitButton.disabled = false;
    return;
  }

  try {
    // Create user with Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store additional user info in Firestore
    await db.collection('users').doc(user.uid).set({
      fullName: fullName,
      email: email,
      phone: phone,
      dob: dob,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Redirect to login or dashboard page
    window.location.href = 'login.html';
  } catch (error) {
    errorMessage.textContent = error.message;
    submitButton.textContent = 'Sign Up';
    submitButton.disabled = false;
  }
});
  