import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBJ1ExAns4lCy2n1RKdoYmfR9yEWp92Zqs",
  authDomain: "podcast-plateform-25cf7.firebaseapp.com",
  projectId: "podcast-plateform-25cf7",
  storageBucket: "podcast-plateform-25cf7.appspot.com",
  messagingSenderId: "49422176510",
  appId: "1:49422176510:web:8db99290dabc1f555e55af",
  measurementId: "G-WP5N5WLZ7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};