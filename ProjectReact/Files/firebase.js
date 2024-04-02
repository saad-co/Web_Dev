
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaaDlUJWqEVyurVxCSa5jYouCocTGooe0",
  authDomain: "react-notes-4e611.firebaseapp.com",
  projectId: "react-notes-4e611",
  storageBucket: "react-notes-4e611.appspot.com",
  messagingSenderId: "768788961555",
  appId: "1:768788961555:web:20eadcd6ae217c15eee2e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db,"notes");