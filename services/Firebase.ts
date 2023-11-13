// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbyjxUTTNwMxQ7g5MvjtJd5UuRIyIiob4",
  authDomain: "thaumcraft-9cb62.firebaseapp.com",
  projectId: "thaumcraft-9cb62",
  storageBucket: "thaumcraft-9cb62.appspot.com",
  messagingSenderId: "929280487154",
  appId: "1:929280487154:web:faf35a3fb3cb2ec92e6a6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
