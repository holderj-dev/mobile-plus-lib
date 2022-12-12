// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMJZSW-yCUff64aWP9zvwcWstjni0Imk",
  authDomain: "my-site-46b32.firebaseapp.com",
  projectId: "my-site-46b32",
  storageBucket: "my-site-46b32.appspot.com",
  messagingSenderId: "1041344616147",
  appId: "1:1041344616147:web:4b32850da470551374a626",
  measurementId: "G-5WKKWRD1ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);