// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpW3nhoTbDReuGqgYzuUHYI7z_peLX2jc",
  authDomain: "auth-firebase-context-ta-ecfb3.firebaseapp.com",
  projectId: "auth-firebase-context-ta-ecfb3",
  storageBucket: "auth-firebase-context-ta-ecfb3.appspot.com",
  messagingSenderId: "241052119064",
  appId: "1:241052119064:web:ed4e85558ba7b1212fd36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;