// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzACZiZRKIUkrQ4zfcXf-hxyU5PjWxoQY",
  authDomain: "app-d8c4e.firebaseapp.com",
  projectId: "app-d8c4e",
  storageBucket: "app-d8c4e.appspot.com",
  messagingSenderId: "50991172825",
  appId: "1:50991172825:web:b19c684cf3b91518e4c2c8",
  databaseURL: "https://app-d8c4e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
