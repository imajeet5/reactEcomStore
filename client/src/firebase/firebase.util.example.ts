import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

export const config = {
  apiKey: "Your_API_KEY",
  authDomain: "",
  databaseURL: "https://reactecom-db.firebaseio.com",
  projectId: "reactecom-db",
  storageBucket: "reactecom-db.appspot.com",
  messagingSenderId: "****",
  appId: "****",
  measurementId: "****",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


