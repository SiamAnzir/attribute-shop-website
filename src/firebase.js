import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAp1AIo-NY2hqtWoGmZ31YwayTYdbuEbA",
  authDomain: "attribute-shop-website.firebaseapp.com",
  projectId: "attribute-shop-website",
  storageBucket: "attribute-shop-website.appspot.com",
  messagingSenderId: "826067721502",
  appId: "1:826067721502:web:5a492dc124bbd3622ffd0f",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
