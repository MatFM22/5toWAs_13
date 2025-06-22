// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC1dJVi8xG0pSagjQl3kMytQHljc4cu85g",
  authDomain: "fir-auth-53f98.firebaseapp.com",
  projectId: "fir-auth-53f98",
  storageBucket: "fir-auth-53f98.firebasestorage.app",
  messagingSenderId: "736932368580",
  appId: "1:736932368580:web:a2bff678495215bbff7991",
  measurementId: "G-5PHMT6LDBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics only if supported (avoids SSR issues)


// Export auth and provider for authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();