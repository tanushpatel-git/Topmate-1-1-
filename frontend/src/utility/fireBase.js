
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "topmate-244da.firebaseapp.com",
  projectId: "topmate-244da",
  storageBucket: "topmate-244da.firebasestorage.app",
  messagingSenderId: "824987856658",
  appId: "1:824987856658:web:9ee6a04c1439ff753b8dcb",
  measurementId: "G-9YL4135KSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


