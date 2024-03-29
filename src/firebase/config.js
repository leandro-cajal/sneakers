// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDussF227djHMCalAYiHQaabX_rCnB2X3s",
  authDomain: "sneakers-shop-leo.firebaseapp.com",
  projectId: "sneakers-shop-leo",
  storageBucket: "sneakers-shop-leo.appspot.com",
  messagingSenderId: "677701255215",
  appId: "1:677701255215:web:cd5c5053f38b26acff86da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)