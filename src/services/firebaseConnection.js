import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDaVwrocFrLoqBaRAfVS0y11tMaN-hoFTM",
  authDomain: "devlink-lucarauj.firebaseapp.com",
  projectId: "devlink-lucarauj",
  storageBucket: "devlink-lucarauj.appspot.com",
  messagingSenderId: "381346878383",
  appId: "1:381346878383:web:499a8ae24e1ee1b617155a",
  measurementId: "G-VSD6XT2HP4"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};