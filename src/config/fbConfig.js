// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyB6V-mU8mWE49C5Oz-M1Jkf980Y0NNIqEc",

  authDomain: "gg-lyrics.firebaseapp.com",

  projectId: "gg-lyrics",

  storageBucket: "gg-lyrics.appspot.com",

  messagingSenderId: "1071423525358",

  appId: "1:1071423525358:web:393c9ad9341067dcf7feff",

  measurementId: "G-KXZTG12PPG"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export default firebaseConfig;