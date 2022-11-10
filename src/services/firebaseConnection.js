import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeiYkS1-3SMayFIKc-PtSjmmhFVpyp70E",
  authDomain: "devlinks-d3255.firebaseapp.com",
  projectId: "devlinks-d3255",
  storageBucket: "devlinks-d3255.appspot.com",
  messagingSenderId: "553896276753",
  appId: "1:553896276753:web:002117644e6a0cafa992b0",
  measurementId: "G-SBMF7PSCJP"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};


