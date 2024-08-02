// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD__iU1RbJo28ium5xVYEmLx-CYfwOKR1o",
  authDomain: "netflixgpt-b33f7.firebaseapp.com",
  projectId: "netflixgpt-b33f7",
  storageBucket: "netflixgpt-b33f7.appspot.com",
  messagingSenderId: "974327038471",
  appId: "1:974327038471:web:cf3f3a520ffd3489fc60a2",
  measurementId: "G-NVRJ396Y3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);