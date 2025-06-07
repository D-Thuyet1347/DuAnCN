import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAjr0RdB9Im_S30j-4dcrvVd3xhsJoTRew",
  authDomain: "fir-95471.firebaseapp.com",
  projectId: "fir-95471",
  storageBucket: "fir-95471.firebasestorage.app",
  messagingSenderId: "446395676386",
  appId: "1:446395676386:web:bb882e0911287ae55050bb",
  measurementId: "G-WF31QVDH8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {  auth, db };