// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxtPE4mUZV8dV39rRhVMC-F9CgphLTwUo",
  authDomain: "portfolio-project-14a25.firebaseapp.com",
  projectId: "portfolio-project-14a25",
  storageBucket: "portfolio-project-14a25.firebasestorage.app",
  messagingSenderId: "826236365085",
  appId: "1:826236365085:web:eea249bf097a52244e59f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;