// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoeFi45cOjZ7LxKN36E2wziAcIW7uOFrc",
  authDomain: "assingment-11-auth.firebaseapp.com",
  projectId: "assingment-11-auth",
  storageBucket: "assingment-11-auth.appspot.com",
  messagingSenderId: "361149140415",
  appId: "1:361149140415:web:cf334613151606983be50a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default (auth)