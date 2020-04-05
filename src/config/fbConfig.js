import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEkEwXLeZUn5N3Trp3R-v9oXEOm1S3ils",
  authDomain: "react-redux-firebase-app-30fd9.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app-30fd9.firebaseio.com",
  projectId: "react-redux-firebase-app-30fd9",
  storageBucket: "react-redux-firebase-app-30fd9.appspot.com",
  messagingSenderId: "112756699767",
  appId: "1:112756699767:web:aa17869f529b1b868bcc72",
  measurementId: "G-V0PW061YWR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
