// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5w2N0QRE2iRPMuvzddTXgskQWOTIFXh8",
  authDomain: "cinesenseai-ac8ad.firebaseapp.com",
  projectId: "cinesenseai-ac8ad",
  storageBucket: "cinesenseai-ac8ad.firebasestorage.app",
  messagingSenderId: "630829419223",
  appId: "1:630829419223:web:5a9c574715674661c9be92",
  measurementId: "G-X2SL0P98PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
