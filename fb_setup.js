// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGsWgLtX91s1nVazqKnqPhLRtjAvUekE",
  authDomain: "sahasra-2.firebaseapp.com",
  databaseURL: "https://sahasra-2-default-rtdb.firebaseio.com",
  projectId: "sahasra-2",
  storageBucket: "sahasra-2.firebasestorage.app",
  messagingSenderId: "609645217444",
  appId: "1:609645217444:web:8d4b738c90a0a76e324831",
  measurementId: "G-WG94E82PXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);