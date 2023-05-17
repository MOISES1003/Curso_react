import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiXle7J0qWR2KNxzKN9dl66P2nFamd2Kw",
  authDomain: "fir-reactlogin-2206c.firebaseapp.com",
  projectId: "fir-reactlogin-2206c",
  storageBucket: "fir-reactlogin-2206c.appspot.com",
  messagingSenderId: "809420501738",
  appId: "1:809420501738:web:e309c2fdcd0683a96cdd93",
  measurementId: "G-P4QK898N22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};