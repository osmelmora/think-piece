import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwKGGcuaBeTf4ncWwKA8Vx73WV6XY1rJ8",
  authDomain: "think-peace-453fc.firebaseapp.com",
  databaseURL: "https://think-peace-453fc.firebaseio.com",
  projectId: "think-peace-453fc",
  storageBucket: "",
  messagingSenderId: "714866594502",
  appId: "1:714866594502:web:155dea6b8fc5a883"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

// for debugging purposes, TODO: allow it only in development
window.firebase = firebase;

export default firebase;
