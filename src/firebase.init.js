// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7do7DvsGYrmmSfcGjdjjSbrcXJPLa5Vk",
  authDomain: "genius-car-service-38757.firebaseapp.com",
  projectId: "genius-car-service-38757",
  storageBucket: "genius-car-service-38757.appspot.com",
  messagingSenderId: "137582454320",
  appId: "1:137582454320:web:5e01eab3cd260fdebd2ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
