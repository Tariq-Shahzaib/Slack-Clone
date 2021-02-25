import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyD6pKPqe9KDQXy0TVOR5_O7gtzGMeJByL8",
    authDomain: "slack-clone-15447.firebaseapp.com",
    projectId: "slack-clone-15447",
    storageBucket: "slack-clone-15447.appspot.com",
    messagingSenderId: "350091761761",
    appId: "1:350091761761:web:1bf74001243286f9b7f220"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider, db}