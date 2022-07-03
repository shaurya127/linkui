// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW-ELtx-DxTMQmDsY2UNtq8wwFHN117DE",
  authDomain: "mindful-audio-337108.firebaseapp.com",
  projectId: "mindful-audio-337108",
  storageBucket: "mindful-audio-337108.appspot.com",
  messagingSenderId: "390828417450",
  appId: "1:390828417450:web:141c61e9866b44ae8b8bd3",
  measurementId: "G-D1TRH3Q3VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);