import firebase from 'firebase/app';
import 'firebase/firestore'; //database in firebase called firestore
import 'firebase/auth'; //auth function login / signup etc.

//Inititialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDmzucte90ZywSUgXzgNLtVMsPG_kt9qbo',
  authDomain: 'payment-monitoring-32d1e.firebaseapp.com',
  projectId: 'payment-monitoring-32d1e',
  storageBucket: 'payment-monitoring-32d1e.appspot.com',
  messagingSenderId: '146735167438',
  appId: '1:146735167438:web:94244474331e4967f4dd9f',
  measurementId: 'G-GSWZ59J7LY',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapsshots: true });

export default firebase;
