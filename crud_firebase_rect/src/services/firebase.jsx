
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCx4_T0bKXAOuRif_2JarLx6SsGRVgkBhg",
  authDomain: "crudfirebasereact-931d3.firebaseapp.com",
  projectId: "crudfirebasereact-931d3",
  storageBucket: "crudfirebasereact-931d3.appspot.com",
  messagingSenderId: "1008900411433",
  appId: "1:1008900411433:web:e1482993343601967b4c38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};