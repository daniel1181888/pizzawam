import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import firebase from "../config/firebase";

const handleRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      console.log('Registration successful:', user);
      return user;
    })
    .catch((error) => {
      // Registration failed
      console.error('Registration failed:', error);
      throw error;
    });
};

export default handleRegister;