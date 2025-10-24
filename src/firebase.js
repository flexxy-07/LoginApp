
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYsA3eqrraHcqjKpHzNs35WL-c3J-QpPY",
  authDomain: "auth-1a7bb.firebaseapp.com",
  projectId: "auth-1a7bb",
  storageBucket: "auth-1a7bb.firebasestorage.app",
  messagingSenderId: "15057940765",
  appId: "1:15057940765:web:48ed4ef32609b9e0f9b1f4",
  measurementId: "G-SD764CBPYY"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
