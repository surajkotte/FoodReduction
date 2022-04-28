// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBez4hSBfrcZXuWtSQ3wC5-0LsIMLVYjfU",
  authDomain: "to-do-f2930.firebaseapp.com",
  projectId: "to-do-f2930",
  storageBucket: "to-do-f2930.appspot.com",
  messagingSenderId: "102086600545",
  appId: "1:102086600545:web:258be7736b41402b7f0720"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export default auth;