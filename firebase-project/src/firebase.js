// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZMvKb8B3Cf_14T7XGRzTIYE_gmBxmDO8",
  authDomain: "project-firebase-deda9.firebaseapp.com",
  projectId: "project-firebase-deda9",
  storageBucket: "project-firebase-deda9.firebasestorage.app",
  messagingSenderId: "260649327423",
  appId: "1:260649327423:web:0d11bbb90b8288e923518a",
  measurementId: "G-LCV6DCBFLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);