import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3HP0fPHz_SrszVdTGqOBlEVyQFjEK7kM",
  authDomain: "react-notes-2dc99.firebaseapp.com",
  projectId: "react-notes-2dc99",
  storageBucket: "react-notes-2dc99.appspot.com",
  messagingSenderId: "507573636981",
  appId: "1:507573636981:web:c6b301078de59b8f6b4d3c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
