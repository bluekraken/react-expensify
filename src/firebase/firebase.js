// Imports
import firebase from "firebase/app";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
// import expenses from "../tests/fixtures/expenses";

const firebaseConfig = {
    apiKey: "AIzaSyAnXFCPJmOzEXg8_PEG9CAJxt04szdg7wQ",
    authDomain: "react-expensify-13e8f.firebaseapp.com",
    databaseURL: "https://react-expensify-13e8f.firebaseio.com",
    projectId: "react-expensify-13e8f",
    storageBucket: "react-expensify-13e8f.appspot.com",
    messagingSenderId: "11666500961",
    appId: "1:11666500961:web:f151580bf6112522cbe920",
    measurementId: "G-6YW5F5G7X3"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();