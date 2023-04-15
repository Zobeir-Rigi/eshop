import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEKs45qDve_l1Et19khPlxv_PqpWS2CjY",
  authDomain: "eshop-7a428.firebaseapp.com",
  projectId: "eshop-7a428",
  storageBucket: "eshop-7a428.appspot.com",
  messagingSenderId: "244433765725",
  appId: "1:244433765725:web:47d1f4373621079cc754b4",
  measurementId: "G-88F47TQWMV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
