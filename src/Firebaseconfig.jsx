// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYoSlWsV6wUgJkxqgGrcLphaZle13osUo",
  authDomain: "foodfarm-app.firebaseapp.com",
  projectId: "foodfarm-app",
  storageBucket: "foodfarm-app.appspot.com",
  messagingSenderId: "472243000632",
  appId: "1:472243000632:web:d3a72f5c2e25f2d083ddcd",
  measurementId: "G-P62M044V5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, auth };
