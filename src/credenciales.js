// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsRm7rVhTyzKvfP4I_HUMtfxjFE5RmPo",
  authDomain: "gim-login.firebaseapp.com",
  projectId: "gim-login",
  storageBucket: "gim-login.firebasestorage.app",
  messagingSenderId: "481175951860",
  appId: "1:481175951860:web:54bc68047deb8b5eb101a1"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase