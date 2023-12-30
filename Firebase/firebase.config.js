// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8MU5m8rvSQ7cstz8C7lnnd8MoMeiQDOE",
  authDomain: "murari-chand-high-school.firebaseapp.com",
  projectId: "murari-chand-high-school",
  storageBucket: "murari-chand-high-school.appspot.com",
  messagingSenderId: "865486839514",
  appId: "1:865486839514:web:567b90f5794aae3b11cfe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app