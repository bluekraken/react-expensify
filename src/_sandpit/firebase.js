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

const guid = "690698eb-8830-4084-bb0c-1d54eecbc1b1";

const database = firebase.firestore();

const expenses = [];

const unsubscribe = database.collection("expenses")
  .onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {

      if (change.type === "added") {
        expenses.push({
          ...change.doc.data(),
          guid: change.doc.id
        });
      } else {
        const index = expenses.findIndex((expense) => expense.guid === change.doc.id);

        if (index > -1) {
          if (change.type === "modified") {
            expenses[index] = {
              ...change.doc.data(),
              guid: change.doc.id
            }
          }

          if (change.type === "removed") {
            expenses.splice(index, 1);
          }
        }
      }
    });
    console.log(expenses);
  }, (error) => {
    console.log(error);
  });

// const unsubscribe = database.collection("expenses")
//   .onSnapshot((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((doc) => {
//       expenses.push({
//         ...doc.data(),
//         guid: doc.id
//       });
//     });
//     console.log(expenses);
//   }, (error) => {
//     console.log(error);
//   });

// expenses.forEach((expense) => {
//   database.collection("expenses")
//     .doc(expense.guid)
//     .set({
//       description: expense.description,
//       amount: expense.amount,
//       notes: expense.notes,
//       createdOn: expense.createdOn
//     });
// });

// Later
// unsubscribe();

// setTimeout(() => {
//   database.collection("users")
//     .doc(uuidv4())
//     .set({
//       name: "Claire Hearse",
//       job: "Surface Pattern Designer",
//       location: {
//         city: "Alton",
//         countryCode: "GB"
//       }
//     });
// }, 5000);



const userRef = database.collection("users").doc(guid);

// userRef
//   .update({
//     job: "Javascript Guru",
//     "location.countryCode": "GB"
//   })
//   .then(() => {
//     console.log("Document updated");
//   })
//   .catch((error) => {
//     console.log("Update failed: ", error);
//   });

  // userRef
  // .update({
  //   "location.intlDialingCode": firebase.firestore.FieldValue.delete()
  // })
  // .then(() => {
  //   console.log("Document updated");
  // })
  // .catch((error) => {
  //   console.log("Update failed: ", error);
  // });

  // userRef
//   .delete()
//   .then(() => {
//     console.log("Document removed!");
//   })
//   .catch((error) => {
//     console.log("Document not removed!!!", error);
//   });