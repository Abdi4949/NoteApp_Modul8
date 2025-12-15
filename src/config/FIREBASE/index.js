import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Firebase config dari Firebase Console (WEB APP)
const firebaseConfig = {
  apiKey: "AIzaSyAmGipb4-t8aiEqMg0VizfhP8_JgkeHBtY",
  authDomain: "praktikum-da6e9.firebaseapp.com",
  databaseURL:
    "https://cobacoba-39938-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "praktikum-da6e9",
  storageBucket: "praktikum-da6e9.firebasestorage.app",
  messagingSenderId: "832923489460",
  appId: "1:832923489460:web:aad1860e133a6d060433e1",
};

// Cegah initialize ulang saat hot reload
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FIREBASE = firebase;
export default FIREBASE;
