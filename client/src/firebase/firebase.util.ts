import firebase from "firebase/app";

import FirebaseConfig from "./api.config";

import "firebase/firestore";
import "firebase/auth";

export const config = {
  apiKey: FirebaseConfig.apiKey,
  authDomain: FirebaseConfig.authDomain,
  databaseURL: FirebaseConfig.databaseURL,
  projectId: FirebaseConfig.projectId,
  storageBucket: FirebaseConfig.storageBucket,
  messagingSenderId: FirebaseConfig.messagingSenderId,
  appId: FirebaseConfig.appId,
  measurementId: FirebaseConfig.measurementId,
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
