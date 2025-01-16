// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0oMgN1-lngV-4L-n6Dq6V6h7F6J06MkY",
  authDomain: "netflix-gpt-a2c67.firebaseapp.com",
  projectId: "netflix-gpt-a2c67",
  storageBucket: "netflix-gpt-a2c67.firebasestorage.app",
  messagingSenderId: "251594985299",
  appId: "1:251594985299:web:20966228fcf06af7ea5ba6",
  measurementId: "G-9FXQP7G8PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
