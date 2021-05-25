import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGor5wrgTNENPjPTmfWXHwP6_oIR8oZK4",
    authDomain: "clothing-dd.firebaseapp.com",
    projectId: "clothing-dd",
    storageBucket: "clothing-dd.appspot.com",
    messagingSenderId: "790346422720",
    appId: "1:790346422720:web:fd57b43368c821e4c41025",
    measurementId: "G-LH9DDM50M5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;