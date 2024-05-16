import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: "reactchat-3b000.firebaseapp.com",
  projectId: "reactchat-3b000",
  storageBucket: "reactchat-3b000.appspot.com",
  messagingSenderId: "693239151588",
  appId: "1:693239151588:web:aede57642750dd4346a5f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
