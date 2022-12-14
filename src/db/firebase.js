  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQ96aX7yJGhHjK4Q643qzs5bpmRIovwNc",
    authDomain: "mobile-plus-lib.firebaseapp.com",
    projectId: "mobile-plus-lib",
    storageBucket: "mobile-plus-lib.appspot.com",
    messagingSenderId: "459971511041",
    appId: "1:459971511041:web:e007ad13e2a6dc8b8c1100",
    measurementId: "G-YGT42MPC5H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
