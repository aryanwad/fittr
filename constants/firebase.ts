// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClAgPh-uMvUi4Fy8XQTlLN5GYM8hYGOmo",
  authDomain: "fittr-f2733.firebaseapp.com",
  projectId: "fittr-f2733",
  storageBucket: "fittr-f2733.firebasestorage.app",
  messagingSenderId: "421434593679",
  appId: "1:421434593679:web:a9866ec1189f229461fbfa",
  measurementId: "G-4B1GF82TN7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
