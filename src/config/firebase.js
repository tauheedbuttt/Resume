// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { keys } from "./keys";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId,
  measurementId: keys.measurementId,
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const firebaseStorage = firebase.storage();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();