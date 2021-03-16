import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5Pk7Vm0c8Yfz4YiyoR9Sx9_CI0TZ3VVY",
    authDomain: "crwn-db-d27cc.firebaseapp.com",
    projectId: "crwn-db-d27cc",
    storageBucket: "crwn-db-d27cc.appspot.com",
    messagingSenderId: "930108822965",
    appId: "1:930108822965:web:4c7eb4fdf56ed5dfdb75fc",
    measurementId: "G-2DFYFVEJEN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
