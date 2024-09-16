const firebaseConfig = {
  apiKey: "AIzaSyAaaJseTDTDjGq3zdLWkuu0GeV-O9CjkAM",
  authDomain: "healthline-4a04c.firebaseapp.com",
  projectId: "healthline-4a04c",
  storageBucket: "healthline-4a04c.appspot.com",
  messagingSenderId: "468225330533",
  appId: "1:468225330533:web:451b6d08c3fedb4118258c",
  measurementId: 'G-VP5G3TXF2N',
};

// Initialize Firebase (use compat to avoid modular issues)
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
