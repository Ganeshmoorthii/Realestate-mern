// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3b594.firebaseapp.com",
  projectId: "mern-estate-3b594",
  storageBucket: "mern-estate-3b594.firebasestorage.app",
  messagingSenderId: "856013131377",
  appId: "1:856013131377:web:87e53f92971fe66999d5d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);