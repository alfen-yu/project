import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB8YzaZa9PHl6_HWXMOGgppotZsOlv20Q4",
    authDomain: "sdechs-site.firebaseapp.com",
    databaseURL: "https://sdechs-site.firebaseio.com",
    projectId: "sdechs-site",
    storageBucket: "sdechs-site.appspot.com",
    messagingSenderId: "813223868978",
    appId: "1:813223868978:web:289127bf26a9a4e5a7da2b",
    measurementId: "G-16Q9YH3JFR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };