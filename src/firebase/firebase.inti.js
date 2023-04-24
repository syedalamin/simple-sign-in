// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayEpyyxcOh1hXJEocUCCSsAtIjj2iD1Q",
  authDomain: "prectis-simple-firebase.firebaseapp.com",
  projectId: "prectis-simple-firebase",
  storageBucket: "prectis-simple-firebase.appspot.com",
  messagingSenderId: "750776725793",
  appId: "1:750776725793:web:4dd69f90992f83dd9b8e60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;