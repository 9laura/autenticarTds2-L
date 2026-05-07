// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO2Z91rPJvptxLdRMdPYnYauMyKhsTz5k",
  authDomain: "autenticartds2l.firebaseapp.com",
  projectId: "autenticartds2l",
  storageBucket: "autenticartds2l.firebasestorage.app",
  messagingSenderId: "933914752572",
  appId: "1:933914752572:web:1d6c3d59110320d9d23539",
  measurementId: "G-F4ZLWV3RSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);