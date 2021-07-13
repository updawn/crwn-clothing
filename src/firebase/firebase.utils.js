import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDn-jpsY1bqC-wupr0AJ654_T5-jfmPhB8',
  authDomain: 'crwn-clothing-35db1.firebaseapp.com',
  projectId: 'crwn-clothing-35db1',
  storageBucket: 'crwn-clothing-35db1.appspot.com',
  messagingSenderId: '1013094591503',
  appId: '1:1013094591503:web:06d42493b083d2e323477a',
  measurementId: 'G-BEXEE4QW2Y',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
