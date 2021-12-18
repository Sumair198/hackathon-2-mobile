import * as firebase from '@firebase/app';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAIllqsmFB3V26esFBLdR8ZZUi5dhRiOI",
  authDomain: "hackathon-web-2.firebaseapp.com",
  projectId: "hackathon-web-2",
  storageBucket: "hackathon-web-2.appspot.com",
  messagingSenderId: "413486854228",
  appId: "1:413486854228:web:479b5e2351117a2040bdc1",
  measurementId: "G-XS8Y46TTFG"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  firebase,
  db,
  auth,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
