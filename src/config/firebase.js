
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCpPa42JVeMjGUoqtFVCNwtt91JOnMROeI",
  authDomain: "pizzawam-24f70.firebaseapp.com",
  projectId: "pizzawam-24f70",
  storageBucket: "pizzawam-24f70.appspot.com",
  messagingSenderId: "515245691484",
  appId: "1:515245691484:web:ff41862ac8232af7690c99"
};


const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
