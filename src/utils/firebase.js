// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "argen-blog.firebaseapp.com",
  projectId: "argen-blog",
  storageBucket: "argen-blog.appspot.com",
  messagingSenderId: "80103548343",
  appId: "1:80103548343:web:e85c6222ef72402b2eb432"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);