import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqCfeYTXi7HHawXzH0ZDTmjgXoBbchEgk",
  authDomain: "adityaportfolio2-0.firebaseapp.com",
  databaseURL: "https://adityaportfolio2-0-default-rtdb.firebaseio.com",
  projectId: "adityaportfolio2-0",
  storageBucket: "adityaportfolio2-0.firebasestorage.app",
  messagingSenderId: "31375203816",
  appId: "1:31375203816:web:a83c6484b6666dc1ef585d"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);