import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import FIREBASE_CONFIG from './constants'

const config = FIREBASE_CONFIG

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }
    catch(error){
      console.log('error creatin user', error.message)
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
