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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
