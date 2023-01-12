// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUyyNCvPkhM_ksK0UZBxLrrc8UksZvpU",
  authDomain: "mvp-auth-222ae.firebaseapp.com",
  projectId: "mvp-auth-222ae",
  storageBucket: "mvp-auth-222ae.appspot.com",
  messagingSenderId: "152667771156",
  appId: "1:152667771156:web:5bad68086bca147856f201"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};