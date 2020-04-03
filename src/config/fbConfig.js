import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtdhncutoFq5g9kJ-KCP_ILMrAhADZm9E",
  authDomain: "react-redux-firebase-app-6e2cb.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app-6e2cb.firebaseio.com",
  projectId: "react-redux-firebase-app-6e2cb",
  storageBucket: "react-redux-firebase-app-6e2cb.appspot.com",
  messagingSenderId: "288809015883",
  appId: "1:288809015883:web:37dc32c588478c3cae4bce",
  measurementId: "G-RT9ZQY6GZW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
