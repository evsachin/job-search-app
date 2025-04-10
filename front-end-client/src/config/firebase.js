// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔥 Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBjgzf6SPe53sJQBqCY909ClFnEwIH2YCE",
  authDomain: "job-search-app-e298d.firebaseapp.com",
  projectId: "job-search-app-e298d",
  storageBucket: "job-search-app-e298d.appspot.com",
  messagingSenderId: "913037410669",
  appId: "1:913037410669:web:7e1c5ca54d1ac6e6cb5a64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // ✅ This line is crucial
