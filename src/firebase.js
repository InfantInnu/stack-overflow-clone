import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjPwzQuOurThGrrLeHZs6StEEgmRmwDw8",
  authDomain: "stackoverflow-3a64e.firebaseapp.com",
  projectId: "stackoverflow-3a64e",
  storageBucket: "stackoverflow-3a64e.appspot.com",
  messagingSenderId: "90886627208",
  appId: "1:90886627208:web:26ce6feaf0025dbdd511b9",
  measurementId: "G-LDJE2JW8YE",
};

const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// export { auth, provider };
