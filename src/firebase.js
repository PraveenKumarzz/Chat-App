import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZxVri4iChu34hTdTzJBdEG5Tvn2lQNMA",
    authDomain: "chat3-5928e.firebaseapp.com",
    projectId: "chat3-5928e",
    storageBucket: "chat3-5928e.appspot.com",
    messagingSenderId: "507366326733",
    appId: "1:507366326733:web:ebc2f6884bb467a8418484"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();