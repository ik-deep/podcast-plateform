import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBFkn0UvaCAbB9ndk-3ocjCeOZZqJH9uMQ",
  authDomain: "podcast-plateform-57d6e.firebaseapp.com",
  projectId: "podcast-plateform-57d6e",
  storageBucket: "podcast-plateform-57d6e.appspot.com",
  messagingSenderId: "310763416154",
  appId: "1:310763416154:web:be01e62ffd7846ef524663",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};