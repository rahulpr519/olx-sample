import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnWZysHE3QXH-jCQNXHbnnKMLAaVw3Y0A",
    authDomain: "olx-clone-a5a94.firebaseapp.com",
    projectId: "olx-clone-a5a94",
    storageBucket: "olx-clone-a5a94.appspot.com",
    messagingSenderId: "870834165522",
    appId: "1:870834165522:web:27f8d00218b2f1d574c5cb",
    measurementId: "G-DVQVPM3S2L"
  };

  export default firebase.initializeApp(firebaseConfig)