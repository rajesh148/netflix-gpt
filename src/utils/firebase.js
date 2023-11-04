// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSEMePCM2PoKMDmxWy2NDnXSDKE7Omqes",
  authDomain: "netflixgpt-ef9f3.firebaseapp.com",
  projectId: "netflixgpt-ef9f3",
  storageBucket: "netflixgpt-ef9f3.appspot.com",
  messagingSenderId: "308637395784",
  appId: "1:308637395784:web:61e96fb399f47c0900217d",
  measurementId: "G-4ZVFYRXRZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();