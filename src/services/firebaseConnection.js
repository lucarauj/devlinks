import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPsZInmG7V1a6lW9QJpVL2H9W-stlAKpM",
  authDomain: "devlinks-73d17.firebaseapp.com",
  projectId: "devlinks-73d17",
  storageBucket: "devlinks-73d17.appspot.com",
  messagingSenderId: "24774526686",
  appId: "1:24774526686:web:a03dd8a3c96ef2946ca44f",
  measurementId: "G-CF579DWRK9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};


