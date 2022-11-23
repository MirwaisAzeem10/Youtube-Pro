// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDlE0xZMhya1ea81r8njx83HRRt2Bh27kg",
  authDomain: "my10-875e9.firebaseapp.com",
  projectId: "my10-875e9",
  storageBucket: "my10-875e9.appspot.com",
  messagingSenderId: "152194386801",
  appId: "1:152194386801:web:953ed0f0ca8142010144d0",
  measurementId: "G-1076Z4850S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);