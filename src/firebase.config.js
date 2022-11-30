import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkQS2GoBx-IR_BR4dD_4bPUNGaPyMQugI",
  authDomain: "house-marketplace-app-7e89f.firebaseapp.com",
  projectId: "house-marketplace-app-7e89f",
  storageBucket: "house-marketplace-app-7e89f.appspot.com",
  messagingSenderId: "66680163160",
  appId: "1:66680163160:web:c1874be8bb6d9e273e732d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
