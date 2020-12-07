import firebase from "firebase/app"; //need to access the storage and auth capabilities as the keyword will help us to access it
import "firebase/firestore"; // for the db storage
import "firebase/auth"; //for the storage

const config = {
  apiKey: "AIzaSyA98omIAxnbqPyGARazdP79QE1henMUxfs",
  authDomain: "boon-db.firebaseapp.com",
  databaseURL: "https://boon-db.firebaseio.com",
  projectId: "boon-db",
  storageBucket: "boon-db.appspot.com",
  messagingSenderId: "285921592173",
  appId: "1:285921592173:web:48a29b36395a0577ad9064",
  measurementId: "G-M9F1CE2878",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalUserData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshotRef = await userRef.get();

  if(!snapshotRef.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalUserData
      })
      console.log(userAuth);
    } catch(error) {
      console.log("Error creating the user :" + error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
