// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcTyYK2K2XEvULENyBYGn6b9N2sKvz9to",
  authDomain: "netflix-3e927.firebaseapp.com",
  projectId: "netflix-3e927",
  storageBucket: "netflix-3e927.appspot.com",
  messagingSenderId: "833553821320",
  appId: "1:833553821320:web:e863efe106757d05f6393d",
  measurementId: "G-MLZCRDS5P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
