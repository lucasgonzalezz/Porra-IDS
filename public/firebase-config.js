// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLpmt-HnYsLemRxPcmYtLHZrVdd1OjZg4",
  authDomain: "web-apuestas.firebaseapp.com",
  projectId: "web-apuestas",
  storageBucket: "web-apuestas.firebasestorage.app",
  messagingSenderId: "776414560504",
  appId: "1:776414560504:web:14cf1a7f06c8716c933b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
  auth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
};
