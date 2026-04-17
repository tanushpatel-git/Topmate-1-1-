import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "topmate-86112.firebaseapp.com",
  projectId: "topmate-86112",
  storageBucket: "topmate-86112.firebasestorage.app",
  messagingSenderId: "850257838765",
  appId: "1:850257838765:web:189ff3010641507a197c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();