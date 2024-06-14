// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw9v9lSf671OaTyRhTutlltO20w_U8O9M",
  authDomain: "shopping-118ba.firebaseapp.com",
  projectId: "shopping-118ba",
  storageBucket: "shopping-118ba.appspot.com",
  messagingSenderId: "418528728136",
  appId: "1:418528728136:web:7ae9117a00955c7428f47d",
  measurementId: "G-ZXVYW722DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider} ;