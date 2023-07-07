// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmtKr4Fn5bOvVes6cfQNARnY4Q1hmXKU",
  authDomain: "fir-auth-e73b4.firebaseapp.com",
  projectId: "fir-auth-e73b4",
  storageBucket: "fir-auth-e73b4.appspot.com",
  messagingSenderId: "893030891283",
  appId: "1:893030891283:web:11b8b331a6346ceaaaa4e6",
  measurementId: "G-N07E2VZCWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);