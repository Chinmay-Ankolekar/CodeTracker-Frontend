import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzOFyUtRyHyHIn-4RuwmEsPwQCWBQCCeo",
    authDomain: "leetcode-tracker-6f022.firebaseapp.com",
    databaseURL: "https://leetcode-tracker-6f022-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "leetcode-tracker-6f022",
    storageBucket: "leetcode-tracker-6f022.appspot.com",
    messagingSenderId: "1018319647499",
    appId: "1:1018319647499:web:7fecdef6a5cee20192680e",
    measurementId: "G-EW08MHQ81B"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);